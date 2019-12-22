/**
 * @Description: 基础配置
 * @author: hlf
 */
//自定义模块
layui.define(['form'],function(exports){
	var form=layui.form;
    var obj = {
		//获取公司列表
		getCompanyList : function(){
			var field = {typeId:'',name:'',checkSta:1},_this = this;
			$.ajax({
			    type:"get",
				data : field,
			    dataType:"json",
			    url:"/company/queryCompany",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.renderCompSelList(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂无公司,请先添加公司');
					}
			    }
			});
		},
		renderCompSelList : function(list){
			var str = '<option value="">请选择公司</option>';
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			}
			$('#compNameSel').html(str);
			form.render();
		},
		//获取车头类型
		getTrucksHeadType : function(){
			var _this = this;
			$.ajax({
			    type:"get",
				data : { id:'' },
			    dataType:"json",
			    url:"/tHeadType/queryTHeadType",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.renderTruckHeadType(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂未添加车头类型,请先添加');
					}
			    }
			});
		},
		renderTruckHeadType : function(list){
			var str = '<option value="">请选择车头类型</option>';
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			}
			$('#truckHeadTypeSel').html(str);
			form.render();
		},
		//获取车头品牌
		getTrucksHeadBrand : function(){
			var _this = this;
			$.ajax({
			    type:"get",
				data : { id:'' },
			    dataType:"json",
			    url:"/tHeadPp/queryTHeadPp",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.renderTrucksHeadBrand(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂未添加车头品牌,请先添加');
					}
			    }
			});
		},
		renderTrucksHeadBrand : function(list){
			var str = '<option value="">请选择车头品牌</option>';
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			}
			$('#truckHeadBrandSel').html(str);
			form.render();
		},
		//获取储罐品牌
		getTankBrand : function(){
			var _this = this;
			$.ajax({
			    type:"get",
				data : { id:'' },
			    dataType:"json",
			    url:"/tPotPp/queryTPotPp",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.rendTankBrand(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂未添加储罐品牌,请先添加');
					}
			    }
			});
		},
		rendTankBrand : function(list){
			var str = '<option value="">请选择储罐品牌</option>';
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			}
			$('#tankBandSel').html(str);
			form.render();
		},
		//获取气源类型
		getGasType : function(){
			var _this = this;
			$.ajax({
			    type:"get",
				data : { id:'' },
			    dataType:"json",
			    url:"/qyType/queryGasType",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.renderGasTypeHtml(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂未添加气源类型,请先添加');
					}
			    }
			});
		},
		renderGasTypeHtml : function(list){
			var str = '<option value="">请选择气源类型</option>';
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			}
			$('#gasTypeSel').html(str);
			form.render();
		},
		//获取尾气排放标准
		getWqpfbz : function(){
			var _this = this;
			$.ajax({
			    type:"get",
				data : { id:'' },
			    dataType:"json",
			    url:"/wqPfbz/queryWqPfbz",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.renderWqpfbzHtml(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂未添加尾气排放标准,请先添加');
					}
			    }
			});
		},
		renderWqpfbzHtml : function(list){
			var str = '<option value="">请选择尾气排放标准</option>';
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			}
			$('#wqpfbzSel').html(str);
			form.render();
		},
		//获取装载介质
		getZzjz : function(){
			var _this = this;
			$.ajax({
			    type:"get",
				data : { id:'' },
			    dataType:"json",
			    url:"/potZzjzType/queryPotZzjzType",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.renderZzjz(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂未添加装载介质,请先添加');
					}
			    }
			});
		},
		renderZzjz : function(list){
			var str = '<option value="">请选择装载介质</option>';
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			}
			$('#zzjzSel').html(str);
			form.render();
		}
	};
	//basicInfo 基础表单select
	//选择公司
	form.on('select(compNameSel)',function(data){
		data.value == '' ? $('#compNameInp').val('') : $('#compNameInp').val(data.value);
	});
	//选择车头类型
	form.on('select(truckHeadTypeSel)',function(data){
		data.value == '' ? $('#truckHeadTypeInp').val('') : $('#truckHeadTypeInp').val(data.value);
	});
	//选择车头品牌
	form.on('select(truckHeadBrandSel)',function(data){
		data.value == '' ? $('#truckHeadBrandInp').val('') : $('#truckHeadBrandInp').val(data.value);
	});
	//选择储罐品牌
	form.on('select(tankBandSel)',function(data){
		data.value == '' ? $('#tankBandInp').val('') : $('#tankBandInp').val(data.value);
	});
	//选择尾气排放标准
	form.on('select(wqpfbzSel)',function(data){
		data.value == '' ? $('#wxpfbzInp').val('') : $('#wxpfbzInp').val(data.value);
	});
	//选择气源类型
	form.on('select(gasTypeSel)',function(data){
		data.value == '' ? $('#gasTypeInp').val('') : $('#gasTypeInp').val(data.value);
	});
	//选择装载介质
	form.on('select(zzjzSel)',function(data){
		data.value == '' ? $('#zzjzInp').val('') : $('#zzjzInp').val(data.value);
	});
	
    //输出接口
    exports('basicInfo', obj);
});
