/**
 * Created by jiangyanghe on 16/7/16.
 */
var HomeModule = angular.module('HomeModule', ['ui.router','ngCookies']);


HomeModule.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /index
    $urlRouterProvider.otherwise("/index");
    // Now set up the states
    $stateProvider
        .state('basic.home', {
            url: '/index',
            templateUrl: '/home/template/home.html',
            controller: 'HomeCtrl'
        })
        .state('basic.ui-router', {
            url: '/ui-router',
            templateUrl: '/home/template/ui-route.html',
            controller: 'HomeCtrl'
        })
        .state('basic.directives', {
            url: '/directives?ng',
            templateUrl: '/home/template/directives.html',
            controller: 'HomeCtrl'
        })
        .state('basic.bower', {//IE9一下跳转页面
            url: '/bower',
            templateUrl: '/home/template/bowerLink.html'
        })
});
