var cs = angular.module("myApp.factoryCategoryService", ["firebase"])

    .factory("CategoryService", function($firebase, FIREBASE_URI){
        var ref = new Firebase(FIREBASE_URI+"/category");
        var sync = $firebase(ref);
        var categories = sync.$asArray();
        
        var getCategories = function(){
            return categories;    
        };
        
        var addCategory = function(category){
            categories.$add(category);
        };
        
        var removeCategory = function(category){
            categories.$remove(category);   
        };
        
        var updateCategory = function(category){
            categories.$save(category);
        };
        
        var isExistsCategory = function(category){
            var len = categories.length;
            for(var i=0; i<len; i++){
                if(categories[i].name === category.name)
                    return true;
            }
            return false;
        };
        
        return {
            getCategories: getCategories,
            addCategory: addCategory,
            removeCategory: removeCategory,
            updateCategory: updateCategory,
            isExistsCategory: isExistsCategory
        };
    });
    
    