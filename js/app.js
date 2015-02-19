var app = angular.module('myApp', ['ui.router', 'myApp.factoryCategoryService'])
    
  app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
    })
    
    .state('category', {
        url: '/category',
        templateUrl: 'templates/category.html'
    });
  $urlRouterProvider.otherwise('/home');
})

  .constant('FIREBASE_URI','https://techniki-yasio.firebaseio.com/')

  .controller('myCtrl', function($scope, CategoryService){
        $scope.categories = CategoryService.getCategories();
        $scope.currentCategory = null;
        $scope.currentBookmark = null;
        $scope.currentBookmarks = [];
        $scope.showEditCategory = false;
        $scope.showEditBookmark = false;
        $scope.currentName = "";
        
        $scope.addCategory = function(category) {
            CategoryService.addCategory(category);    
        };
        $scope.removeCategory = function(category){
           //BookmarksImageService.removeAllBookmarkForCategory(category);
           CategoryService.removeCategory(category);
        };
        $scope.updateCategory = function(category){
            CategoryService.updateCategory(category);
        };  
    
  });