angular
  .module('app.routes', [])

  .config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'templates/dashboard.html',
      controller: 'dashboardCtrl'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'aboutCtrl'
    })

    .state('involved', {
      url: '/involved',
      templateUrl: 'templates/involved.html',
      controller: 'involvedCtrl'
    })

    .state('resources', {
      url: '/resources',
      templateUrl: 'templates/resources.html',
      controller: 'resourcesCtrl'
    })

    .state('chat', {
      url: '/chat',
      templateUrl: 'templates/chat.html',
      controller: 'chatCtrl'
    })

    .state('events', {
      url: '/events',
      templateUrl: 'templates/events.html',
      controller: 'eventsCtrl'
    })

    .state('feedback', {
      url: '/feedback',
      templateUrl: 'templates/feedback.html',
      controller: 'feedbackCtrl'
    })

    $urlRouterProvider.otherwise('/dashboard')



});
