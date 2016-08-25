import angular from 'angular'
import app_lib from './lib/lib'
import app_modules from './modules/modules'
import ngAnimate from 'angular-animate'
import toastr from 'angular-toastr'

angular.module('app', [
  'ngAnimate',
  'toastr',
  'app_lib',
  'app_modules'
])

export default 'app';