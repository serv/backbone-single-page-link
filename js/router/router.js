var app = app || {};

(function () {
  'use strict';

  var ChoiceRouter = Backbone.Router.extend({
    routes: {
      '':         'root',
      'result-1': 'result1',
      'result-2': 'result2'
    },

    root: function() {
    },

    result1: function() {
      new app.Result1View();
    },

    result2: function() {
      new app.Result2View();
    }
  });

  app.ChoiceRouter = new ChoiceRouter();
  Backbone.history.start();
})();
