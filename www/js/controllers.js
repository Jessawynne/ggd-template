angular
  .module('app.controllers', [])

  .controller('dashboardCtrl', function ($scope) {

  })

  .controller('involvedCtrl', function ($scope) {

  })

  .controller('resourcesCtrl', function ($scope) {

  })

  .controller('eventsCtrl', function ($scope) {

    $scope.events = [{
      // #16 CP
      icon: 'ion-wineglass',
      title: 'Code + Pinot',
      date: 'March 23, 2016',
      time: '6:00 p.m.',
      description: "Creating Visual Stories with D3.js",
      href: ""
    }, {
      // #15 GGD
      icon: 'ion-woman',
      title: 'Girl Geek Dinner',
      date: 'February 24, 2016',
      time: '6:00 p.m.',
      description: 'Sponsored by TechnologyAdvice',
      href: ""
    }, {
      // #14 GGD
      icon: 'ion-woman',
      title: 'Girl Geek Dinner',
      date: 'January 27, 2016',
      time: '6:00 p.m.',
      description: 'Sponsored by UBS',
      href: "http://ggdnashville.com/nashville-girl-geek-dinner-14-sponsored-by-ubs/"
    }, {
      // #15 CP
      icon: 'ion-wineglass',
      title: 'Code + Pinot',
      date: 'January 19, 2016',
      time: '6:00 p.m.',
      description: "A Beginner's Lesson in JavaScript",
      href: "http://ggdnashville.com/code-pinot-a-beginners-lesson-in-javascript/"
    }, {
      // #14 CP
      icon: 'ion-wineglass',
      title: 'Code + Pinot',
      date: 'October 21, 2015',
      time: '6:00 p.m.',
      description: "How to Install WordPress",
      href: "http://ggdnashville.com/code-pinot-how-to-install-wordpress-build-your-own-website/"
    }, {
      // #13 CP
      icon: 'ion-wineglass',
      title: 'Code + Pinot',
      date: 'September 23, 2015',
      time: '6:00 p.m.',
      description: "An Introduction to Git and GitHub",
      href: "http://ggdnashville.com/code-pinot-an-introduction-to-git-and-github/"
    }, {
      // #13 GGD
      icon: 'ion-woman',
      title: 'Girl Geek Dinner',
      date: 'September 20, 2015',
      time: '6:00 p.m.',
      description: 'Sponsored by Metova',
      href: "http://ggdnashville.com/girl-geek-dinner-sponsored-by-metova/"
    }, {
      // #12 GGD
      icon: 'ion-woman',
      title: 'Girl Geek Dinner',
      date: 'August 27, 2015',
      time: '6:00 p.m.',
      description: 'Sponsored by Emdeon',
      href: "http://ggdnashville.com/girl-geek-dinner-sponsored-by-emdeon/"
    }, {
      // #12 CP
      icon: 'ion-wineglass',
      title: 'Code + Pinot',
      date: 'July 22, 2015',
      time: '6:00 p.m.',
      description: "A Beginner's Intro to Ruby",
      href: "http://ggdnashville.com/code-pinot-an-beginners-intro-to-the-ruby-language/"
    }, {
      // #11 CP
      icon: 'ion-wineglass',
      title: 'Code + Pinot',
      date: 'June 24, 2015',
      time: '6:00 p.m.',
      description: "An Introduction to Object-Oriented Programming",
      href: "http://ggdnashville.com/code-pinot-night-may-20th-2015/"
    }, {
      // #11 GGD
      icon: 'ion-woman',
      title: 'Girl Geek Dinner',
      date: 'June 5, 2015',
      time: '6:00 p.m.',
      description: 'Sponsored by Eventbrite',
      href: "http://ggdnashville.com/girl-geek-dinner-11-sponsored-by-eventbrite/"
    }, {
      // #10 GGD
      icon: 'ion-woman',
      title: 'Girl Geek Dinner',
      date: 'April 29, 2015',
      time: '6:00 p.m.',
      description: 'Sponsored by LaunchTN',
      href: "http://ggdnashville.com/843/"
    }]

  })

  .controller('aboutCtrl', function ($scope) {

  })

  .controller('feedbackCtrl', function ($scope, $ionicLoading) {

    $scope.message = {
      'name': '',
      'email': '',
      'subject': '',
      'body': ''
    };

    $scope.finalSubmit = function () {
      $ionicLoading.show({ template: "Submitting...", duration: 1500})
    }

  })

  .controller('chatCtrl', ['$scope', '$state', 'localStorageService', 'SocketService', function($scope, $state, localStorageService, SocketService) {

    const vm = this;

    vm.current_room = localStorageService.get('room');
    vm.rooms = ['Introduce Yourself', 'Coding', 'Questions'];

    $scope.login = function (username) {
      localStorageService.set('username', username);
      $state.go('rooms');
    };

    $scope.enterRoom = function (room_name) {

      vm.current_room = room_name;
      localStorageService.set('room', room_name);

      const room = {
        'room_name': room_name
      };

      SocketService.emit('join:room', room);

      $state.go('room');
    };

  }])

  .controller('chatroomCtrl', ['$scope', '$state', 'localStorageService', 'SocketService', 'moment', '$ionicScrollDelegate', function ($scope, $state, localStorageService, SocketService, moment, $ionicScrollDelegate) {

    const vm = this;

    vm.messages = [];

    $scope.humanize = function (timestamp) {
      return moment(timestamp).fromNow();
    };

    vm.current_room = localStorageService.get('room');

    const current_user = localStorageService.get('username');

    $scope.isNotCurrentUser = function (user) {

      if (current_user != user) {
        return 'not-current-user';
      }
      return 'current-user';
    };

    $scope.sendTextMessage = function () {

      const msg = {
        'room': vm.current_room,
        'user': current_user,
        'text': vm.message,
        'time': moment()
      };

      vm.messages.push(msg);
      $ionicScrollDelegate.scrollBottom();

      vm.message = '';

      SocketService.emit('send:message', msg);
    };

    $scope.leaveRoom = function () {
      const msg = {
        'user': current_user,
        'room': vm.current_room,
        'time': moment()
      };

      SocketService.emit('leave:room', msg);
      $state.go('rooms');
    };

    SocketService.on('message', function (msg) {
      vm.messages = vm.messages.concat(msg);
      $ionicScrollDelegate.scrollBottom();
    });

  }])
