layui.define(function(exports){
	var obj = {
		initDragHtml : function(){
			var img_htmls='<div class="item_content" id="imageChange"><ul>';
			$(".item_container .clear_both").remove();
			$(".item_container #over").remove();
			$(".item_container #imageChange").remove();
			$(".item_container").children().each(function(){
			    var img_html = '<li><div class="item">';
			    img_html += $(this).html();
			    img_html +='</div></li>';
			    img_htmls +=img_html;
			});
			img_htmls +='</ul></div>';
			$(".item_container").html(img_htmls);
			this.initDragImg();
			img_htmls = '<div class="over" id="over" style="display: none;">' +
			    '<p style="width:100%;height:100%;background-color: #000000;opacity:0.5;z-index:3333;"></p>' +
			    '<input type="button" class="pre_page" style="position: absolute;top:50%;left:2%;z-index:5555;font-size: 20px;width: 100px;height: 50px;background-color: #FFFFFFF;border-radius: 5%; margin-right: 50px;" value="上一张"/>' +
			    '<img src="" style="width:600px;position: absolute;top:10%;left:20%;z-index:5555;" id="over_img"/>' +
			    '<input type="hidden"  id="over_img_index" value="0"/>' +
			    '<input type="button" class="past_page"  style="position: absolute;top:50%;right:2%;z-index:5555;font-size: 20px;width: 100px;height: 50px;background-color: #FFFFFFF;border-radius: 5%; " value="下一张"/>' +
			    '</div>';
			$(".item_container").append(img_htmls);
			img_htmls = '<div class="clear_both" style="clear: both;">' +
			    '</div>';
			$(".item_container").append(img_htmls);
		},
		initDragImg : function(){
			var that = this;
			$(".item_container .item").each(function(i) {
				
			    //$(".item_content .item").each(function(i) {
			    this.init = function() { // 初始化  this为item
			        this.box = $(this).parent();//li
			        $(this).attr({
						"index":i,
						"id":"item_" + i
					}).css({
			            position : "absolute",
			            left : this.box.offset().left,
			            top : this.box.offset().top - 40
			        }).appendTo(".item_container") ;
			        this.drag() ;
			    },
			        this.move = function(callback) {  // 移动
			            $(this).stop(true).animate({
			                left : this.box.offset().left,
			                top : this.box.offset().top - 40
			            }, 500, function() {
			                if(callback) {
			                    callback.call(this) ;
			                }
			            }) ;
			        },
			        this.collisionCheck = function() {
			            var currentItem = this ;
			            var direction = null ;
			            $(this).siblings(".item").each(function() {
			                if(
			                    currentItem.pointer.x > this.box.offset().left &&
			                    currentItem.pointer.y > this.box.offset().top &&
			                    (currentItem.pointer.x < this.box.offset().left + this.box.width()) &&
			                    (currentItem.pointer.y < this.box.offset().top + this.box.height())
			                ) {
			                    // 返回对象和方向
			                    if(currentItem.box.offset().top < this.box.offset().top) {
			                        direction = "down" ;
			                    } else if(currentItem.box.offset().top > this.box.offset().top) {
			                        direction = "up" ;
			                    } else {
			                        direction = "normal" ;
			                    }
			                    this.swap(currentItem, direction) ;
			                }
			            }) ;
			        },
			        this.swap = function(currentItem, direction) { // 交换位置
			            if(this.moveing) return false ;
			            var directions = {
			                normal : function() {
			                    var saveBox = this.box ;
			                    this.box = currentItem.box ;
			                    currentItem.box = saveBox ;
			                    this.move() ;
			                    $(this).attr({
									"index": this.box.index(),
									"id" : "item_" +this.box.index()
								}) ;
			                    $(currentItem).attr({
									"index":currentItem.box.index(),
									"id" : "item_" + currentItem.box.index()
								}) ;
			                },
			                down : function() {
			                    // 移到上方
			                    var box = this.box ;
			                    var node = this ;
			                    var startIndex = currentItem.box.index() ;
			                    var endIndex = node.box.index(); ;
			                    for(var i = endIndex; i > startIndex ; i--) {
			                        var prevNode = $(".item_container .item[index="+ (i - 1) +"]")[0] ;
			                        node.box = prevNode.box ;
			                        $(node).attr({
										"index": node.box.index(),
										"id" : "item_" + node.box.index()
									}) ;
			                        node.move() ;
			                        node = prevNode ;
			                    }
			                    currentItem.box = box ;
			                    $(currentItem).attr({
									"index": box.index(),
									"id" : "item_" + box.index()
								}) ;
			                },
			                up : function() {
			                    // 移到上方
			                    var box = this.box ;
			                    var node = this ;
			                    var startIndex = node.box.index() ;
			                    var endIndex = currentItem.box.index(); ;
			                    for(var i = startIndex; i < endIndex; i++) {
			                        var nextNode = $(".item_container .item[index="+ (i + 1) +"]")[0] ;
			                        node.box = nextNode.box ;
			                        $(node).attr({
										"index": node.box.index(),
										"id" : "item_" + node.box.index()
									}) ;
			                        node.move() ;
			                        node = nextNode ;
			                    }
			                    currentItem.box = box ;
								$(currentItem).attr({
									"index": box.index(),
									"id" : "item_" + box.index()
								}) ;
			                }
			            }
			            directions[direction].call(this) ;
			        },
			        this.drag = function() { // 拖拽
			            var oldPosition = new Position() ;
			            var oldPointer = new Pointer() ;
			            var isDrag = false ;
			            var currentItem = null ;
			            $(this).mousedown(function(e) {
			                e.preventDefault() ;
			                oldPosition.left = $(this).position().left ;
			                oldPosition.top =  $(this).position().top ;
			                oldPointer.x = e.clientX ;
			                oldPointer.y = e.clientY ;
			                isDrag = true ;
			
			                currentItem = this ;
			
			            }) ;
			            $(document).mousemove(function(e) {
			                var currentPointer = new Pointer(e.clientX, e.clientY) ;
			                if(!isDrag) return false ;
			                $(currentItem).css({
			                    "opacity" : "0.8",
			                    "z-index" : 999
			                }) ;
			                var left = currentPointer.x - oldPointer.x + oldPosition.left ;
			                var top = currentPointer.y - oldPointer.y + oldPosition.top ;
			                $(currentItem).css({
			                    left : left,
			                    top : top
			                }) ;
			                currentItem.pointer = currentPointer ;
			                // 开始交换位置
			
			                currentItem.collisionCheck() ;
			
			
			            }) ;
			            $(document).mouseup(function() {
			                if(!isDrag) return false ;
			                isDrag = false ;
			                currentItem.move(function() {
			                    $(this).css({
			                        "opacity" : "1",
			                        "z-index" : 0
			                    }) ;
			                }) ;
			            }) ;
			        }
			    this.init() ;
			}) ;
		},
		Pointer : function(x, y){
			this.x = x ;
			this.y = y ;
		},
		Position : function(left, top){
			this.left = left ;
			this.top = top ;
		}
	};
	//输出接口
	exports('dragFun', obj);
});

function Pointer(x, y) {
    this.x = x ;
    this.y = y ;
}
function Position(left, top) {
    this.left = left ;
    this.top = top ;
}