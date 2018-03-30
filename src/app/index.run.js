(function() {
  'use strict';

  angular
    .module('axrepository')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, localStorageService, $state, $window) {
    moment.locale('zh-cn');
    // 初始化时，判断登录状态
    $rootScope.logined = true;
    // $rootScope.logined = !!localStorageService.get('token');
    // $rootScope.mainPage = !!localStorageService.get('token');

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { // eslint-disable-line
      $state;
      var className = 'path-' + toState.url.replace(/\//g, '').replace(/:/g, '-').replace(/-0/g, '');
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
