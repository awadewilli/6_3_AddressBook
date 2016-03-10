var Backbone = require('backbone');
var $        = require('jquery');

var Contact  = require('./contact');

var Contacts = Backbone.Collection.extend({
  model: Contact

});

module.exports = Contacts;
