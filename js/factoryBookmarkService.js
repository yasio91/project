var bs = angular.module("myApp.factoryBookmarkService", ["firebase"])

    .factory("BookmarkService", function($firebase, FIREBASE_URI){
        var ref = new Firebase(FIREBASE_URI+"/bookmarks");
        var sync = $firebase(ref);
        var bookmarks = sync.$asArray();
        
        var getBookmarks = function(){
            return bookmarks;
        };
        var addBookmark = function(bookmark){
            bookmarks.$add(bookmark);
        };
        var removeBookmark = function(bookmark){
            bookmarks.$remove(bookmark);
        };
        var removeAllBookmarkForCategory = function(category){
            var len = bookmarks.length;
            for (var i=0; i<len; i++) {
                if (bookmarks[i].categoryname === category.name) {
                    bookmarks.$remove(i);
                }
            }
        };

        return {
            getBookmarks: getBookmarks,
            addBookmark: addBookmark,
            removeBookmark: removeBookmark,
            removeAllBookmarkForCategory: removeAllBookmarkForCategory
        }
    });
    
    