'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'restangular',
  'angular-input-stars',
  'uiGmapgoogle-maps'
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/list');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list.html',
            controller: 'ListCtrl as vm'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      })
      .state('main.gauge', {
        url: '/gauge',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/gauge.html',
            controller: 'GaugeCtrl as vm'
          }
        }
      })
      .state('main.maps', {
        url: '/maps',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/maps.html',
            controller: 'MapsCtrl as vm'
          }
        }
      });
});
