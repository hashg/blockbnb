import Controller from '@ember/controller';
// import { computed } from '@ember/object';
import config from '../config/environment';

export default Controller.extend({
  serverName : config.APP.servername,
  serverPort : config.APP.serverport,
  serverAPI : config.APP.serverAPI
});
