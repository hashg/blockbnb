import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { debug } from '@ember/debug';
import config from '../config/environment';
import $ from 'jquery';

export default Controller.extend({
  access : service(),
  isLightActive: false,
  servername : config.APP.iotservername,
  serverport : config.APP.iotserverport,
  serverAPI : config.APP.iotserverAPI,

  blockservername : config.APP.blockservername,
  blockserverport : config.APP.blockserverport,
  blockserverAPI : config.APP.blockserverAPI,

  enabled : computed('access.flag', function() {
    debug('enabled');
    return this.get('access.flag');
  }),

  server: computed('servername', 'serverport', 'serverAPI', function() {
    let servername = this.get('servername');
    let serverport = this.get('serverport');
    let serverAPI = this.get('serverAPI')

    return `${servername}:${serverport}${serverAPI}`;
  }),

  blockserver: computed('blockservername', 'blockserverport', 'blockserverAPI', function() {
    let servername = this.get('blockservername');
    let serverport = this.get('blockserverport');
    let serverAPI = this.get('blockserverAPI')

    return `${servername}:${serverport}${serverAPI}`;
  }),

  actions: {
    toggleLight() {
      let server = this.get('server');
      if(this.get("isLightActive")) {
        debug("Switch Off");

        $.getJSON(server + 'off').then((data) => {
           debug("server success");
        });

      } else {
        debug("Switch On")

        $.getJSON(server + 'on').then((data) => {
           debug(data);
        });
        
      }
      debug(this.get('server'));
      this.toggleProperty("isLightActive");
    },

    checkout() {
      let blockserver = this.get('blockserver');
      let access = this.get('access');
      debug(blockserver + 'checkIn');

        $.get(blockserver + 'checkOut', function(){

        }).always(() => {
          debug("checkOut");

           //transaction
          access.set('flag', false);
          access.set('balance', 150);
          access.set('withheld', 0);
          access.set('transaction', 50);
        });
    }
  }
});

