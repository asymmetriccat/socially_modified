import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';


import { Counts } from 'meteor/tmeasday:publish-counts';

import template from './userComments.html';

import {Comments} from '../../../api/parties';


class UserComments {
    constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);
    this.comments=[];
     this.subscribe('comments');
    this.subscribe('users');
   
    this.helpers({
      comments(){
        return comments.find({});
      },
        users() {
        return Meteor.users.find({});
      }

    });
    }

  save() {
    Comments.update({
      _id: this.comments._id
    }, {
      $set: {
        comments: [{
          message: this.comments.message,
          dateCreated: new Date(),
          user: UserComments.users,
        }]
      },
    });
  }


 submit(){
   if(this.comments.message!='') {
     this.save();
     this.comments.push(this.party.message);
     this.comments.message="";
   };
    
 }
 
}

const name = 'userComments';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  
]).component(name, {
    bindings:{comments: '='},
  template,
  controllerAs: name,
  controller: UserComments
})
  .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('userComments', {
      url: '/userComments',
      template: '<user-comments></user-comments>'
    });
}
