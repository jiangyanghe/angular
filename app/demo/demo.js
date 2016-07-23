/**
 * Created by jiangyanghe on 16/7/19.
 */
var DemoModule = angular.module('DemoModule', ['ui.router']);

DemoModule.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('sidemenu.interpolate', {
            url: '/interpolate',
            templateUrl: '/demo/template/interpolate.html',
            controller: 'DemoCtrl'
        })
        .state('sidemenu.form', {
            url: '/form',
            templateUrl: '/demo/template/form.html',
            controller: 'DemoCtrl'
        })
        .state('sidemenu.directive1', {
            url: '/directive1',
            templateUrl: '/demo/template/directive_demos/demo1.html',
            controller: 'DemoCtrl',
            data:'指令第一个demo'
        })
        .state('sidemenu.directive2', {
            url: '/directive2',
            templateUrl: '/demo/template/directive_demos/demo2.html',
            controller: 'DemoCtrl',
            data:'指令传参'
        })
        .state('sidemenu.directive3', {
            url: '/directive3',
            templateUrl: '/demo/template/directive_demos/demo2.html',
            controller: 'DemoCtrl',
            data:'通过指令理解双向绑定'
        })
});
