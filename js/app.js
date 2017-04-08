define(['domReady', 'angular', 'angular-route', 'services/services', 'controllers/controllers', 'controllers/pie-controller', 'directives/directives', 'directives/barChart-directive', 'directives/pieChart-directive', 'services/echart-service'], function(domReady, ng) {
	'use strict';
	var app = ng.module('app', ['ngRoute', 'app.controllers', 'app.directives', 'app.services']);

	function bootstrap() {
		domReady(function(document) {
			ng.bootstrap(document, ['app']);
		});
	}
	return {
		bootstrap: bootstrap,
		getNgModule: function() {
			return app;
		}
	};
});