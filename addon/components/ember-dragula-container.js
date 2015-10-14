import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['dragula-container'],
	didInsertElement:function(){
		Ember.run.next(() => {
			let parent = this.nearestWithProperty('drake');
			parent.get('drake.containers').push(this.element);
		});
	}
});