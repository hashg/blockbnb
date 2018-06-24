import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { debug } from '@ember/debug';
import config from '../config/environment';
import $ from 'jquery';

export default Controller.extend({
  
  routerService: service('router'),
  access : service(),

  servername : config.APP.blockservername,
  serverport : config.APP.blockserverport,
  serverAPI : config.APP.blockserverAPI,

  server: computed('servername', 'serverport', 'serverAPI', function() {
    let servername = this.get('servername');
    let serverport = this.get('serverport');
    let serverAPI = this.get('serverAPI')

    return `${servername}:${serverport}${serverAPI}`;
  }),

  actions: {
    rent() {
      let server = this.get('server');
      let access = this.get('access');
      debug(server + 'checkIn');

        $.get(server + 'checkIn', function(){

        }).always(() => {
        	debug("checkIn");
           
           this.get('routerService').transitionTo('dashboard');
           

           //transaction
           access.set('flag', true);
           access.set('balance', 50);
           access.set('withheld', 150);
        });

      this.toggleProperty("isLightActive");
    }
  }
});


