/**
 * Created by stephen on 2016/7/16.
 */
DemoModule.controller('DemoCtrl',function($scope, $state, $interpolate,$rootScope){
    $scope.$watch('emailBody', function(body) {
        if (body) {
            var template = $interpolate(body);
            $scope.previewText =
                template({to: $scope.to});
        }
    });

    $scope.someBareValue = 'hello';
    $scope.someAction = function() {
        // 在SomeController和ChildController中设置{{ someBareValue }}
        $scope.someBareValue = 'hello stephen, from parent';
    };


    $scope.someModel = {
        someValue: 'hello computer'
    }
    $scope.someAction1 = function() {
        $scope.someModel.someValue = 'hello stephen, from parent';
    };


    $scope.cx =11;
});
DemoModule.controller('ChildController', function($scope) {
    $scope.childAction = function() {
        // 在ChildController中设置{{ someBareValue }}
        $scope.someBareValue = 'hello stephen, from child';
    };
    $scope.childAction1 = function() {
        $scope.someModel.someValue = 'hello stephen, from child';
    };
});

/**
 * 指令详解 scope
 */
DemoModule.controller('SomeCtrl', function($scope) {});
DemoModule.controller('SecondCtrl', function($scope) {});
