import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('winners');
  this.route('awards');
  this.route('news');
  this.route('panel');
  this.route('sponsors');
  this.route('home');
});

export default Router;
