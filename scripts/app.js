angular.module('myApp', ['ngMessages','ngAnimate'])
    .constant('VERSION', 1.1)
    .controller('MyCtrl', function(VERSION, $scope) {
        $scope.version = VERSION;
        $scope.data = {};
        $scope.gender = {};
        $scope.inputHide = false;
        $scope.submit = function () {
          $scope.inputHide = true;
        };
        $scope.reset = function () {
          $scope.inputHide = false;
          $scope.data = {};
          location.reload();
        };
    });
