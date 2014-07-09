/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.Result2View = Backbone.View.extend({
    el: "#results",

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(_.template($('#result-2').html()));
    }
  });

})(jQuery);
