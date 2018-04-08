(function() {
  'use strict';

  angular
    .module('axrepository')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, localStorageService, $state, $window, $location, $transitions) {
    moment.locale('zh-cn');

    // $rootScope.$on('$locationChangeSuccess', function() {
    //   var path = $location.path().slice(1);
    //   var className;
    //   if(path.indexOf('/') > 0){
    //     className = 'path-' + path.split("/")[0]+'-id';
    //   }else{
    //     className = 'path-' + path;
    //   }
    //   $('#root')
    //     .removeClass()
    //     .addClass(className.split('?')[0]);
    // });

    $transitions.onSuccess({}, function(transition) {
      var toState = transition.to();
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
