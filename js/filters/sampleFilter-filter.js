define([], function() {
	'use strict';
	return {
		name: 'sampleFilter',
		filter: function(input, params) {
			return input + ' *sample*';
		}
	};
});