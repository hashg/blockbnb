import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { debug } from '@ember/debug';
import config from '../config/environment';
import $ from 'jquery';

export default Controller.extend({
  isLightActive: false,
  servername : config.APP.iotservername,
  serverport : config.APP.iotserverport,
  serverAPI : config.APP.iotserverAPI,

  server: computed('servername', 'serverport', 'serverAPI', function() {
    let servername = this.get('servername');
    let serverport = this.get('serverport');
    let serverAPI = this.get('serverAPI')

    return `${servername}:${serverport}${serverAPI}`;
  }),

  actions: {
    toggleLight() {
      let server = this.get('server');
      if(this.get("isLightActive")) {
        debug("Switch Off");

        $.getJSON(server + 'off').then((data) => {
           debug(data);
        });

      } else {
        debug("Switch On")

        $.getJSON(server + 'on').then((data) => {
           debug(data);
        });
        
      }
      debug(this.get('server'));
      this.toggleProperty("isLightActive");
    }
  }
});
