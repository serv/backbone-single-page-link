var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	var ChoiceRouter = Backbone.Router.extend({
		routes: {
      '':          'root',
			'result-1': 'result1',
      'result-2': 'result2'
		},

    root: function() {
      console.log('root');
    },

		result1: function() {
      console.log("1");
    },

    result2: function() {
      console.log("2");
    }
	});

	app.ChoiceRouter = new ChoiceRouter();
	Backbone.history.start();
})();
