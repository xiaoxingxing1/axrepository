(function() {
  'use strict';

  angular
    .module('axrepository')
    .controller('LoginController', LoginController);

  function LoginController($scope, localStorageService, $state) {
    activate();

    function activate() {
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
        $state.go('main.page-list');
      } else {
        alert('账号与密码不匹配！');
      }
    }
  }
})();
