(function() {
  'use strict';

  angular
    .module('axrepository')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      // 登录
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController'
      })
      // main
      .state('main', {
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      // 页面列表
      .state('main.page-list', {
        url: '/page',
        views: {
          '@main': {
            templateUrl: 'app/main/page/page-list.html',
            controller: 'PageListController'
          }
        }
      })
      // 页面详情
      .state('main.page-detail', {
        url: '/page/:id',
        views: {
          '@main': {
            templateUrl: 'app/main/page/page-detail.html',
            param: {'id':null},
            controller: 'PageDetailController'
          }
        }
      })

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  }

})();
