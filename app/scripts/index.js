var Backbone = require('Backbone');
var $        = require('jquery');

var Contact  = require('./models/contact');

var Contacts  = require('./models/contacts');
var AddressBook = require('./views/view');
var FormView = require('./views/view');

var formGroup = $('.contact-form')[0];

$(function(){
  // Setup app
  var contacts = new Contacts();
  var addressBook = new AddressBook({collection: contacts});
  var formView = new FormView({collection: contacts});
  contacts.add([
    {'test':1245}
  ]);



});
