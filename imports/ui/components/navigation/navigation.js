import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navigation.html';

import { name as UsersList} from '../usersList/usersList';

const name = 'navigation';

// create a module
export default angular.module(name, [
  angularMeteor, 
  UsersList
]).component(name, {
  template,
  controllerAs: name
});
