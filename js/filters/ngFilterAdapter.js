define(['./filters', 'filters/sampleFilter-filter'], function(filters) {
	var args = Array.prototype.slice.call(arguments, 1);
	args.forEach(function(filter) {
		filters.filter(filter.name, function() {
			return filter.filter;
		});
	});
});