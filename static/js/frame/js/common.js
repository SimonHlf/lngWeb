/**
 * @Description: 基础配置
 * @author: hlf
 */
//自定义模块
layui.define(['form'],function(exports){
	var form=layui.form;
    var obj = {
    	getId : function(id){
    		return document.getElementById(id);
    	},
    	//通用验证码更换	
        vercode : function(){        	
        	var obj = this.getId("sessCode");
			obj.src = "getVerify?"+Math.random()+100;
		},
		//获取角色list select/table
		getRoleList : function(roleId,loadOpt){
			var _this = this;
			layer.load();
			$.ajax({
			    type:"get",
				data : { roleId:roleId },
			    dataType:"json",
			    url:"/role/queryRole",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						if(loadOpt == 'selLoad'){
							_this.createRoleSel(json.datas);	
						}
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						layer.msg('暂无数据');
					}else if(json.code == 50003){
						layer.msg('数据已存在');
					}
			    }
			});
		},
		//创建选择角色select
		createRoleSel : function(list){
			var str = '<option value="">请选择角色</option>';
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].depName +'</option>';
			}
			$('#roleSel').html(str);
			form.render();
		},
		//获取公司类型
		getCompTypeSel : function(){
			var _this = this;
			layer.load();
			$.ajax({
			    type:"get",
				data : { id:'' },
			    dataType:"json",
			    url:"/comType/queryComType",
			    success:function (json){
			    	layer.closeAll('loading');
					if(json.code == 200){
						_this.createCompTypeSel(json.datas);
					}else if(json.code == 1000){
						layer.msg('服务器错误');
					}else if(json.code == 50001){
						$('#compTypeSel').html('<option value="">请选择公司类型</option>');
						form.render();
					}
			    }
			});
		},
		//创建公司类型select
		createCompTypeSel : function(list){
			var str = '<option value="">请选择公司类型</option>';
			for(var i=0;i<list.length;i++){
				str += '<option value="'+ list[i].id +'">'+ list[i].name +'</option>';
			}
			$('#compTypeSel').html(str);
			form.render();
		}
    };
    //输出接口
    exports('common', obj);
});
