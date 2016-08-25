import angular from 'angular'
import ChatController from './ChatController'

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'ChatController',
    controllerAs: 'chat'
  }
}

angular.module('app_modules_chat', [])
  .directive('app', app)
  .controller('ChatController', ChatController)

export default 'app_modules_chat'