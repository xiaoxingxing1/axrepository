(function() {
  'use strict';

  angular
    .module('axrepository')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, localStorageService, $state, $window, $location) {
    moment.locale('zh-cn');

    $rootScope.$on('$locationChangeSuccess', function() {
      var className = 'path-' + $location.path().slice(1).split("/")[0]+'-id';
      console.log(className);
      $('#root')
        .removeClass()
        .addClass(className.split('?')[0]);
    });

    // 监听前进或者回退事件
    $window.onpopstate = function() {
      $rootScope.$broadcast('onpopstate');
    }
  }

})();
