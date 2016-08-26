// Register lib services with it's dependencies

import angular from 'angular'
import toastr from 'angular-toastr'
import logger from './logger/logger'

export default () => {
  angular
    .module('lib', ['toastr'])
    .service('logger', logger)
}