/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({
    el: "#main",

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(_.template($('#choices').html()));
    }
	});

})(jQuery);
