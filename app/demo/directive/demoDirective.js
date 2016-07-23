/**
 * Created by jiangyanghe on 16/7/20.
 */
DemoModule.directive('ensureUnique', ['$http', function($http) {
    return {
        require: 'ngModel',
        link: function(scope, ele, attrs, c) {
            scope.$watch(attrs.ngModel, function() {
                $http({
                    method: 'POST',
                    url: '/api/check/' + attrs.ensureUnique,
                    data: {'field': attrs.ensureUnique}
                }).success(function(data, status, headers, cfg) {
                    c.$setValidity('unique', data.isUnique);
                }).error(function(data, status, headers, cfg) {
                    c.$setValidity('unique', false);
                });
            });
        }
    };
}]);


DemoModule.directive('myDirective', function() {
        return {
            restrict: 'EACM',//声明指令本质上是在HTML中通过元素、属性、类或注释来添加功能
            replace: true,//会将angular中的指令声明隐藏
            template: '<a href="http://google.com">Click me to go to Google</a>'
    };
});
/**
 * 指令传参
 */
DemoModule.directive('myDirective2', function() {
    return {
        restrict: 'EA',//声明指令本质上是在HTML中通过元素、属性、类或注释来添加功能
        //replace: true,//会将angular中的指令声明隐藏
        scope: {
            myUrl: '@', //绑定策略,名字相同
            myLinkText: '@', //绑定策略
            color:'@'

        },
        template: '<a style="{{color}}" href="{{ myUrl }}">{{ myLinkText }}</a>'
    };
});

/**
 * 指令绑定attr
 */
DemoModule.directive('myDirective3', function() {
    return {
        restrict: 'EA',//声明指令本质上是在HTML中通过元素、属性、类或注释来添加功能
        //replace: true,//会将angular中的指令声明隐藏
        scope: {
            myUrl: '@alt', //绑定策略
            color:'@'
        },
        template: '<b style="{{color}}">{{myUrl}}</b>'
    };
});
