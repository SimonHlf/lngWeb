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
			/*
			
				var field = {typeName:'LNG贸易商',checkSta:1},_this = this;
				$.ajax({
				    type:"get",
					data : field,
				    dataType:"json",
				    url:"/company/getCompanyList",
				    success:function (json){
						console.log(json)
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
			*/
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
		},
		//获取进港资质
		getJgzz : function(){
			var _this = this;
			$.ajax({
			    type:"get",
				data : {validSta:0},
			    dataType:"json",
			    url:"/qual/queryQual",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.renderJgzz(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂未添加进港资质,请先添加');
					}
			    }
			});
		},
		renderJgzz : function(list){
			// var str = '<option value="">请选择进港资质</option>';
			// for(var i=0;i<list.length;i++){
			// 	str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			// }
			// $('#jgzzSel').html(str);
			var str = '';
			for(var i=0;i<list.length;i++){
				str += '<input type="checkbox" name="jjzzInpName" lay-filter="jjzzFilter" title="'+ list[i].name +'" value="'+ list[i].id +'" lay-skin="primary">'
			}
			$('#jgzzList').html(str);
			form.render();
		},
		//通过槽车类型获取对应类型车辆信息 普货 危货
		getTrucksByTruckType : function(type){
			var _this = this;
			$.ajax({
			    type:"get",
				data : {type:type},
			    dataType:"json",
			    url:"/trucksType/queryTrTypeByType",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.renderTrcuksInfo(json.datas,type);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂未添加槽车类型对应车辆类型');
					}
			    }
			});
		},
		renderTrcuksInfo : function(list,type){
			if(type == 1){
				var str = '<option value="">请选择普货车辆类型</option>';
			}else{
				var str = '<option value="">请选择危货车辆类型</option>';
			}
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			}
			$('#truckTypeNameSel').html(str);
			form.render();
		},
		getRqDevLm : function(){
			var _this = this;
			$.ajax({
			    type:"get",
				data : { id:'' },
			    dataType:"json",
			    url:"/rqDevType/queryRqDevType",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.renderRqlmHtml(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂未添加燃气设备类目,请先添加');
					}
			    }
			});
		},
		renderRqlmHtml : function(list){
			var str = '<option value="">请选择燃气设备类目</option>';
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			}
			$('#rqDevLmSel').html(str);
			form.render();
		},
		getRqDevType : function(){
			var _this = this;
			$.ajax({
			    type:"get",
				data : { id:'' },
			    dataType:"json",
			    url:"/rqType/queryRqType",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.renderRqDevTypeHtml(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂未添加燃气设备类型,请先添加');
					}
			    }
			});
		},
		renderRqDevTypeHtml : function(list){
			var str = '<option value="">请选择燃气设备类型</option>';
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			}
			$('#rqDevTypeSel').html(str);
			form.render();
		},
		//获取液质类型
		getLqType : function(){
			var _this = this;
			$.ajax({
			    type:"get",
				data : { id:'' },
			    dataType:"json",
			    url:"/gasType/queryGasType",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.renderLqTypeHtml(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂未液质类型,请先添加');
					}
			    }
			});
		},
		renderLqTypeHtml : function(list){
			var str = '<option value="">请选择燃气设备类型</option>';
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			}
			$('#lqTypeSel').html(str);
			form.render();
		},
		//获取液厂
		getLqFactory : function(){
			
		},
		loadProvList : function(){
			var _this = this;
			$.ajax({
			    type:"get",
				data : { gsType:1 },
			    dataType:"json",
			    url:"/common/getProvinceList",
			    success:function (json){
			    	layer.closeAll('loading');
					console.log(json)
					if(json.code == 200){
						_this.renderProvHtml(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂无省份，请添加');
					}
			    }
			});
		},
		renderProvHtml : function(list){
			if(currPage == 'addEditRqTradePage'){
				var str = '<input type="checkbox" name="areaInp" lay-filter="areaFilter" title="全国" value="全国" lay-skin="primary">';
			}else{
				var str = '';
			}
			for(var i=0;i<list.length;i++){
				str += '<input type="checkbox" name="areaInp" lay-filter="areaFilter" title="'+ list[i].province +'" value="'+ list[i].province +'" lay-skin="primary">';
			}
			$('#provList').html(str);
			form.render();
		},
		renderCardNumWords : function(){
			var strNum = '',strWord = '';
			$('#cardTitInp').val(cardTitle[0]);
			$('#cardWordsInp').val(cardWords[0]);
			for(var i=0;i<cardTitle.length;i++){
				strNum += '<option value="'+ cardTitle[i] +'">'+ cardTitle[i] +'</option>';
			}
			for(var i=0;i<cardWords.length;i++){
				strWord += '<option value="'+ cardWords[i] +'">'+ cardWords[i] +'</option>';
			}
			$('#cardTitSel').html(strNum);
			$('#cardWordSel').html(strWord);
			form.render();
		}
	};
	//basicInfo 基础表单select
	//运输范围checkbox
	form.on('checkbox(areaFilter)',function(data){
		var value = data.value;
		if(data.elem.checked){
			if(currPage == 'addEditRqTradePage'){
				$('input[name=areaInp]').each(function(i){
					if(value == '全国'){
						$('input[name=areaInp]').eq(i+1).attr('disabled',true);
						$('input[name=areaInp]').eq(i+1).next().find('span').addClass('disColor');
					}else{
						$('input[name=areaInp]').eq(0).attr('disabled',true);
						$('input[name=areaInp]').eq(0).next().find('span').addClass('disColor');
					}
				});
			}
			tmpProvNameArr.push(value);
		}else{
			for(var i=0;i<tmpProvNameArr.length;i++){
				if(value == tmpProvNameArr[i]){
					tmpProvNameArr.splice(i,1);
				}
			}
			if(currPage == 'addEditRqTradePage'){
				$('input[name=areaInp]').each(function(i){
					if(value == '全国'){
						$('input[name=areaInp]').eq(i+1).attr('disabled',false);
						$('input[name=areaInp]').eq(i+1).next().find('span').removeClass('disColor');
					}else{
						if(tmpProvNameArr.length == 0){
							$('input[name=areaInp]').eq(0).attr('disabled',false);
							$('input[name=areaInp]').eq(0).next().find('span').removeClass('disColor');
						}
					}
				});
			}
		}
	})
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
	//选择进港资质
	form.on('checkbox(jjzzFilter)',function(data){
		var value = data.value;
		if(data.elem.checked){
			jjzzIdArr.push(value);
		}else{
			for(var i=0;i<jjzzIdArr.length;i++){
				if(value == jjzzIdArr[i]){
					jjzzIdArr.splice(i,1);
				}
			}
		}
	});
	//根据货车类普货危货获取对应车辆类型选择
	form.on('select(truckTypeNameSel)',function(data){
		data.value == '' ? $('#truckTypeNameInp').val('') : $('#truckTypeNameInp').val(data.value);
	});
	//选择燃气设备类目
	form.on('select(rqDevLmSel)',function(data){
		data.value == '' ? $('#rqDevLmInp').val('') : $('#rqDevLmInp').val(data.value);
	});
	//选择燃气设备类型
	form.on('select(rqDevTypeSel)',function(data){
		data.value == '' ? $('#rqDevTypeInp').val('') : $('#rqDevTypeInp').val(data.value);
	});
	//选择液质类型
	form.on('select(lqTypeSel)',function(data){
		data.value == '' ? $('#lqTypeInp').val('') :  $('#lqTypeInp').val(data.value);
	});
	
    //输出接口
    exports('basicInfo', obj);
});
