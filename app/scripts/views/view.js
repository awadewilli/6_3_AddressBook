var Backbone = require('Backbone');
var handlebars = require('handlebars');
var $        = require('jquery');



var formGroup = $('.contact-form')[0];

$.fn.serializeObject = function() {
return this.serializeArray().reduce(function(acum, i) {
acum[i.name] = i.value;
return acum;
}, {});
};


var FormView = Backbone.View.extend({

events:{
  "submit":"getFormData"

},
el: formGroup,
initialize: function(){

},
render: function(){
this.$el.html();
return this;
},

getFormData:function(event){
event.preventDefault();
var data = this.$el.serializeObject();
console.log(data);
// this.collection.add(data);
// this.render();
}
});


var AddressBook = Backbone.View.extend({
tagName:'ul',

    initialize: function(){
      this.ListenTo(this.collection,add,this.renderchild);
    },
    renderchild: function(contact){
      var view = new ContactItemView({model:contact});

    },
    render: function(){

    },


});

module.exports = AddressBook;
module.exports = FormView;
