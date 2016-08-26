// Register app modules and dependencies

import angular from 'angular'
import chat from './chat'

export default () => {
  angular
    .module('modules', [
      'modules.chat'
    ])
}

chat()