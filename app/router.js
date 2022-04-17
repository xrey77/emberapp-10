import EmberRouter from '@ember/routing/router';
import config from 'emberapp-10/config/environment';

export default class Router extends EmberRouter {

  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('aboutus');
  this.route('not-found', { path: '/*' });
});

