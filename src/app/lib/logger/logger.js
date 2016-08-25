import angular from 'angular'

const logger = (toastr) => {
  return {
    success: function(text) {
      return toastr.success(text, 'Success')
    }
  }
}

angular.module('app_lib_logger', [])
  .service('logger', logger)

export default 'app_lib_logger'