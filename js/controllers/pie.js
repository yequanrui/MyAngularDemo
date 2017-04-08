angular.module('chart-pie', ['chart-directive']).controller('chartPieCtrl', function($scope) {
	$scope.option = {
		title: '站点用户访问来源', // 标题
		subtext: '每天3:00更新', // 副标题
		series: [ //【必填】数据值
			{ "value": 335, "name": "直接访问" }, { "value": 610, "name": "邮件营销" }, { "value": 234, "name": "联盟广告" }, { "value": 1135, "name": "视频广告" }, { "value": 548, "name": "搜索引擎" }
		],
		//backgroundColor: '#f5f5f5', // 背景颜色，默认无背景色
		//saveAsImage: false // 是否显示"保存为图片"
	};
	$scope.onPieClick = function() {
		alert($scope.nodeInfo.name + "_" + $scope.nodeInfo.seriesName + " : " + $scope.nodeInfo.value);
		console.table($scope.nodeInfo);
	}
});