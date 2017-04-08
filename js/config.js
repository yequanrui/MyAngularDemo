requirejs.config({
	appDir: '.',
	baseUrl: 'js',
	// Set paths
	paths: {
		'angular': ['../lib/angular/angular.min'],
		'angular-route': ['../lib/angular-route/angular-route.min'],
		'bootstrap': ['../lib/bootstrap/js/bootstrap.min'],
		'echarts': '../lib/echarts/echarts.min',
		'zrender': '../lib/echarts/echarts.min',
		'domReady': ['../lib/requirejs-domready/domReady'],
		'jquery': ['../lib/jquery/jquery-1.11.3.min']
	},
	// Set dependencies
	shim: {
		'angular': { exports: 'angular' },
		'angular-route': ['angular'],
		'bootstrap': ['jquery']
	}
});
requirejs(["main"])