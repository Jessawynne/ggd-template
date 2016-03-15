angular
  .module('app.controllers', [])

  .controller('dashboardCtrl', function($scope) {

  })

  .controller('involvedCtrl', function($scope) {

  })

  .controller('resourcesCtrl', function($scope) {

  })

  .controller('eventsCtrl', function($scope) {

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

  .controller('aboutCtrl', function($scope) {

  })

  .controller('feedbackCtrl', function($scope) {

  })

