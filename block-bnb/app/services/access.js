import Service from '@ember/service';

export default Service.extend({
  items: null,
  flag : false,
  balance : 200,
  withheld : 0,
  transaction : 0,

  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  add(item) {
    this.get('items').pushObject(item);
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').clear();
  },

  isEmpty () {
  	return this.get('items').length == 0;
  }
});
