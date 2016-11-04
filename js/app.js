// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','pascalprecht.translate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$translateProvider,$ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(0);
 $ionicConfigProvider.tabs.position('top');
    $translateProvider.translations('en', {
    home: 'Home',
    changelanguage:"Change language",
    installapp:"Install app",
    
  });
  $translateProvider.translations('mal', {
    home: 'ഹോം',
        changelanguage:"ഭാഷ മാറ്റുക",
        installapp:"അപ്പ് ഇൻസ്റ്റാൾ ചെയുക "

  });
  $translateProvider.preferredLanguage('en');
  
  
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
   .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller:"home"
      }
    }
  })



  .state('app.changelanguage', {
      url: '/language',
      views: {
        'menuContent': {
          templateUrl: 'templates/changelanguage.html'
        }
      }
    })
  

  .state('app.details', {
    url: '/details/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/details.html',
      }
    }
  })
 .state('app.installapp', {
    url: '/installapp',
    views: {
      'menuContent': {
        templateUrl: 'templates/installapp.html',
      }
    }
  })
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
