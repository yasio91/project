var app = angular.module('myApp', ['ui.router'])
    
  app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
    })
    
    .state('kolejka1', {
        url: '/kolejka1',
        templateUrl: 'templates/kolejka1.html'
    });
  $urlRouterProvider.otherwise('/home');
});