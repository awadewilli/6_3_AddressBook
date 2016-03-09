var Backbone = require('Backbone');
var $        = require('jquery');

var contact = Backbone.Model.extend({
defaults:{
  'email':'test@theironyard.com',
  'first-name':'iron',
  'last-name':'yard',
  'phone':'number',
  'twitter':'tiy',
  'linkedin':'linkedin/tiy.com'
}

});

module.exports = contact;
