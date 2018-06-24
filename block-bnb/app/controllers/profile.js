import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
	access : service(),

	balance : computed('access.balance', function() {
    return this.get('access.balance');
  }),
  withheld : computed('access.withheld', function() {
    return this.get('access.withheld');
  }),
  transaction : computed('access.transaction', function() {
    return this.get('access.transaction');
  }),

});
