layui.define(['table'],function(exports){
	var table = layui.table;
	var obj = {
		renderCopyList : function(data){
			console.log(table)
			var tableObj = parent.parent.document.getElementById('copyListTab');
			table.render({
				elem : tableObj,
				height: 'full-160',
				data : data,
				page : false,
				even : true,
				cellMinWidth:200,
				cols : [[
					{field : '', title: '序号',type:'numbers', align:'center'},
					{field : 'gfName', title: '液厂名称',align:'center'},
					{field : 'price', title: '价格', align:'center'},
					{field : 'priceTime', title: '时间', align:'center'},
					{field : 'prov', title: '归属地', align:'center'},
					{field : 'gasTypeName', title: '液质类型', align:'center'}
				]],
				done : function(res){
					console.log(res)
				}
			});
		}
	};
	//输出接口
	exports('batchCopy', obj);
});