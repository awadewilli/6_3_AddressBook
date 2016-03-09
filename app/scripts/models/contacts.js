var Backbone = require('Backbone');
var $        = require('jquery');
var contact  = require('contact');

var contacts = Backbone.collection.extend({
  model: contact
});
