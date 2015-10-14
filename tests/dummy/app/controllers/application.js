import Ember from 'ember';

export default Ember.Controller.extend({
  nestedOptions: Ember.computed(function(){
    return {
      'options':{
        copy: false,           // elements are moved by default, not copied
        revertOnSpill: false,  // spilling will put the element back where it was dragged from, if this is true
        removeOnSpill: false
      },
      'eventList':[{
        name:'drag'
      },{
        name:'drop'
      }]
    };
  })
});