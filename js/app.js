angular.module("project", ["ui.router"])
    
  .config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
    });
  $urlRouterProvider.otherwise('/home');
})