/**
 * Created by jiangyanghe on 16/7/19.
 */
var LayoutModule = angular.module('LayoutModule', ['ui.router']);


LayoutModule.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /index
    $urlRouterProvider.otherwise("/index");
    // Now set up the states
    $stateProvider
        .state('basic', {
            abstract: true,
            views: {
                '': {
                    templateUrl: '/layout/template/basic.html'
                },
                'header@basic': {
                    templateUrl: '/layout/template/basicHeader.html',
                    controller:'NavCtrl'
                },
                'footer@basic': {
                    templateUrl: '/layout/template/basicFooter.html'
                }
            }
        })

        .state('sidemenu', {
            abstract: true,
            views: {
                '': {
                    templateUrl: '/layout/template/sidemenu.html'
                },
                'left@sidemenu': {
                    templateUrl: '/layout/template/menuLeft.html',
                    controller:'NavCtrl'
                }
            }
        })

});
