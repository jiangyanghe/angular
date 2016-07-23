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
});
