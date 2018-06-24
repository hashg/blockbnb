import Controller from '@ember/controller';
// import { computed } from '@ember/object';
import config from '../config/environment';

export default Controller.extend({
  serverName : config.APP.blockservername,
  serverPort : config.APP.blockserverport,
  serverAPI : config.APP.blockserverAPI
});
