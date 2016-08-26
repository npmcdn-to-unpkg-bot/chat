// Register chat controller and services

import angular from 'angular';
import ChatController from './chat'
import template from './template'

export default () => {
  angular
    .module('modules.chat', [])
    .directive('app', template)
    .controller('ChatController', ChatController)
}
