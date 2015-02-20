var app = angular.module('myApp', ['ui.router', 'myApp.factoryCategoryService', 'myApp.factoryBookmarkService'])
    
  app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
    })
    
    .state('category', {
        url: '/category',
        templateUrl: 'templates/category.html'
    })
    
    .state('bookmark', {
                url: '/category/bookmark/:title',
                templateUrl: 'template/bookmark.html'
            });
  $urlRouterProvider.otherwise('/home');
})

  .constant('FIREBASE_URI','https://techniki-yasio.firebaseio.com/')

  .controller('myCtrl', function($scope, CategoryService, BookmarkService){
        $scope.categories = CategoryService.getCategories();
        $scope.bookmarks = BookmarkService.getBookmarks();
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
        
        $scope.addBookmark = function(bookmark) {
            BookmarkService.addBookmark(bookmark);
        };
        
        $scope.removeBookmark = function(bookmark){
            BookmarkService.removeBookmark(bookmark);
        };
        
        $scope.setActiveCategory = function(category){
            $scope.currentCategory = category;
            $scope.currentBookmark = null;
            $scope.setBookmarkForCategory(category);
        };
        $scope.setBookmarkForCategory = function(category){
            $scope.currentBookmarks = [];
            var len = $scope.bookmarks.length;
            for(var i=0; i<len; i++){
                if($scope.bookmarks[i].categoryname ===  category.name){
                     $scope.currentBookmarks.push($scope.bookmarks[i]);
                }
            }
        };
         $scope.setActiveBookmark = function(bookmark){
            $scope.currentBookmark = bookmark;
        };

  });