var Backbone = require('backbone');
var $        = require('jquery');

var Contact = Backbone.Model.extend({
defaults:{
  'email':'test@theironyard.com',
  'first-name':'iron',
  'last-name':'yard',
  'phone':'number',
  'twitter':'tiy',
  'linkedin':'linkedin/tiy.com'
}

});

module.exports = Contact;
