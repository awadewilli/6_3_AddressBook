var Backbone = require('Backbone');
var handlebars = require('handlebars');
var $        = require('jquery');



var formGroup = $('.contact-form')[0];

var FormView = Backbone.View.extend({

template: formGroup,

events:{
  "submit":"renderForm"
},
initialize: function(){

},
render: function(){
  this.$el.html(this.template(this.model.toJSON()));
      return this;
},
renderForm:function(event){

event.preventDefault();
console.log('test');
  // $.fn.serializeObject = function() {
  //   return this.serializeArray().reduce(function(acum, i) {
  //     acum[i.name] = i.value;
  //     return acum;
  //   }, {});
  // };
}



});

var AddressBook = Backbone.View.extend({
  initialize: function(){

    },
    render: function(){

    }

});

module.exports = AddressBook;
module.exports = FormView;
