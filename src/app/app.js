// Bootstrap app

import angular from 'angular'
import services from './lib'
import modules from './modules'

angular
  .module('app', [
    'lib',
    'modules'
  ])

services()
modules()