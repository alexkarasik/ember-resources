import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit () {
      console.log('editing!');
      this.sendAction('edit', this.get('list'));
    },
    delete() {
      console.log('deleted!');
      this.sendAction('delete', this.get('list'));
  },
},
});
