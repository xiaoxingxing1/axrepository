(function() {
  'use strict';

  angular
    .module('axrepository')
    .controller('PageDetailController', PageDetailController);

  function PageDetailController($scope, $stateParams) {
    activate();

    function activate() {
      $scope.listID = $stateParams.id;
    }

  }
})();
