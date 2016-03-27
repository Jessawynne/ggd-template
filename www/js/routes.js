angular
  .module('app.routes', [])

  .config(function($stateProvider, $urlRouterProvider) {

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

    .state('rooms', {
      url: '/rooms',
      templateUrl: 'templates/rooms.html',
      controller: 'chatCtrl'
    })

    .state('room', {
      url: '/room',
      templateUrl: 'templates/room.html',
      controller: 'chatroomCtrl'
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

    $urlRouterProvider.otherwise('/dashboard');
});
