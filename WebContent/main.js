requirejs.config({
	baseUrl : '.',
	paths : {
		'jquery' : '../bower_components/jquery/dist/jquery',
		'i18n' : '../bower_components/i18n/i18n',
	},
	i18n : {
		locale : 'en-us'
	}
});

require([ 'jquery' ], function() {
	$('h1').on('click', function() {
		require([ "i18n!nls/colors" ], function(colors) {
			console.log('lang = ' + navigator.language);
			console.log("The name for red in this locale is: " + colors.red);
		});
	});
});
