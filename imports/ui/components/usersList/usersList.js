import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import utilsPagination from 'angular-utils-pagination';

import { Meteor } from 'meteor/meteor';

import template from './usersList.html';



class UsersList {
    constructor( $scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      users() {
        return Meteor.users.find({});
      }
     
    });
  }
}
 
const name = 'usersList';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  
]).component(name, {
  template,
  controllerAs: name,
  controller: UsersList
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('usersList', {
      url: '/usersList',
      template: '<users-list></users-list>'
    });
}
