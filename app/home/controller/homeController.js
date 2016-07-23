/**
 * Created by stephen on 2016/7/16.
 */
HomeModule.controller('HomeCtrl',function($scope, $state, $http,$rootScope, $timeout){
    $scope.title = 'ui-route';
    $scope.directives = {
        'title':'ngclick',
        'summary':'点击事件'
    };
    //alert(22);
    $scope.jumpFun = function(){
        $state.go('basic.ui-router');
    };

    $scope.member ={};

    $scope.getProvinces = function(){
            var data = [
                {
                    id:1,
                    name:'江苏'
                },
                {
                    id:2,
                    name:'河南'
                }
                ,
                {
                    id:3,
                    name:'上海'
                }
            ];
            $scope.provinces = data;
            $scope.member.province = data[0].name;
    };

    $scope.getCitys = function(pid){
        console.log(pid);
            var data1 = [
                {
                    id:11,
                    name:'淮安'
                },
                {
                    id:12,
                    name:'南京'
                }
            ];
            $scope.citys = data1;
            $scope.member.city = data1[0].name;
    };
    $scope.getProvinces();
    $scope.getCitys(0);

    $scope.$watch('member.province',function(){
        if($scope.member.province!=null){
            console.log($scope.member.province);
            $scope.getCitys($scope.member.province);
        }
    });
    $scope.$watch('member.city',function(){
        if($scope.member.city!=null){
        }
    });

});
