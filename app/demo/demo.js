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
        .state('sidemenu.directive', {
            url: '/directive',
            templateUrl: '/demo/template/directive_demos/demo.html',
            controller: 'DemoCtrl',
            data:'指令第一个demo'
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
            templateUrl: '/demo/template/directive_demos/demo3.html',
            controller: 'DemoCtrl',
            data:'通过指令理解双向绑定'
        })

        .state('sidemenu.ngReadonly', {
            url: '/ngReadonly',
            templateUrl: '/demo/template/ng_demos/ng-readonly.html',
            controller: 'DemoCtrl',
            data:''
        })
        .state('sidemenu.ngController', {
            url: '/ngController',
            templateUrl: '/demo/template/ng_demos/ng-controller.html',
            controller: 'DemoCtrl',
            data:''
        })
        .state('sidemenu.scope', {
            url: '/scope',
            templateUrl: '/demo/template/directive_demos/scope.html',
            controller: 'DemoCtrl',
            data:'指令详解 scope'
        })
        .state('sidemenu.transclude', {
            url: '/transclude',
            templateUrl: '/demo/template/directive_demos/transclude.html',
            controller: 'DemoCtrl',
            data:'指令详解 transclude'
        })
        .state('sidemenu.controller', {
            url: '/controller',
            templateUrl: '/demo/template/directive_demos/controller.html',
            controller: 'DemoCtrl',
            data:'指令详解 controller'
        })
});
