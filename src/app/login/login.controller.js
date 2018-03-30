(function() {
  'use strict';

  angular
    .module('axrepository')
    .controller('LoginController', LoginController);

  function LoginController($scope, localStorageService, $state, $rootScope) {
    activate();

    function activate() {
      $rootScope.logined = true;
      $scope.user = {
        account: '',
        password: ''
      };
      $scope.login = login;
    }

    /**
     * 登录
     */
    function login(){
      if ($scope.user.account=='1'&&$scope.user.password=='1') {
        localStorageService.set('token', 'cjlwhefiqoiwqwjnxbajshdqwuu17276312ghagh');
      } else {
        alert('账号与密码不匹配！');
      }
    }
  }
})();
