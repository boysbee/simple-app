(function() {
  'use strict';

  angular
    .module('simpleApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
