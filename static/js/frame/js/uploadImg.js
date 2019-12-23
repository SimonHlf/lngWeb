/**
 * @Description: 上传
 * @author: hlf
 */
//自定义模块
var hasUpNum = 0;
layui.define(['upload'],function(exports){
	var upload = layui.upload;
    var obj = {
		getJsonLength : function(jsonData){
			var jsonLength = 0;
			for(var item in jsonData){
				jsonLength++;
			}
			return jsonLength;
		},
		uploadMultiImg : function(elem,wrapObj,maxLen){
			var _this = this,files = null;
			var canUpFlag = true;
			upload.render({
			    elem: '#' + elem
			    ,url: '/upload/uploadMuti'
			    ,multiple: true
				,number: maxLen
				,before: function(obj){
					layer.load();
			    }
			   ,choose : function(obj){
					files = obj.pushFile();
					var len = _this.getJsonLength(files);
				    obj.preview(function(index,file,res){
						if( parseInt(len) + hasUpNum > maxLen){
						   layer.msg('最多只能上传'+ maxLen +'张详情图');
						   for(var key in files){
						   	delete files[key];
						   }
						    canUpFlag = false;
						}else{
							canUpFlag = true;
						}
				    });
			   }
				,done: function(res){
					layer.closeAll('loading');
					if(res.code == 200){
						if(canUpFlag){
							var str = '';
							str += '<li><input type="hidden" name="detImgInp" value="'+ res.datas +'"/><a href="javascript:void(0)" onclick="deleteImg(this)" title="删除"><i class="layui-icon layui-icon-delete"></i></a><img src="/temp/' + res.datas + '"/><span onclick=viewBigImg(\'/temp/'+ res.datas +'\')>查看原图</span></li>';
							$('#' + wrapObj).append(str);
							hasUpNum = $('#' + wrapObj + ' li').length;
							if($('#' + wrapObj + ' li').length >= maxLen){
								$('#' + elem).hide();
							}
							for(var key in files){
								delete files[key];
							}
						}
						
					}else if(res.code == 1000){
						layer.msg('服务器异常');
					}
				}
			  });
		}
    };
    //输出接口
    exports('uploadImg', obj);
});
function deleteImg(obj){
	$(obj).parent().remove();
	maxNum = $('#yzBgImgListUl li').length;
	if(maxNum < 5){
		$('#addYzbgImgBtn').show();
	}
}
function viewBigImg(src){
	window.open('../' + src);
}
