'use strict'

angular.module('myhonorsUser').factory('ProjectService', ['$q', '$http', '$timeout', 'FirebaseIO', 'FirebaseCollection', function($q, $http, $timeout, FirebaseIO, FirebaseCollection) {
    
	var categoriesRef = FirebaseIO.child( 'system_settings/projectCategories' );
 	var projectCategories = FirebaseCollection( categoriesRef );
    
    return {
        read: function( userId, projectId, onComplete ) {
            var deferred = $q.defer();
    
            FirebaseIO.child( 'user_profiles/' + userId + '/profile/projects/' + projectId ).on('value', function(snapshot) {
                if (snapshot.val() === null) {
                    // The project was deleted, do nothing
                    return;
                }
    
                var data = snapshot.val();
                data.id = snapshot.name();
                    
                if (angular.isFunction(onComplete)) {
                    onComplete(data);
                }
                    deferred.resolve(data);    
            });
    
            return deferred.promise;
        },
        
        add: function( userId, projectObject ) {
            if ( !angular.isString(projectObject.title) ||
                !angular.isString(projectObject.description)
            ) {
                return false;
            }
            
            var ref =  FirebaseIO.child( 'user_profiles/' + userId + '/profile/projects/').push(projectObject);
            ref.setPriority(projectObject.createdAt);
            
            FirebaseIO.child( 'projects/' + userId + "/" + ref.name() ).push( projectObject );
            
            return ref.name();
        },
        
        list: function( userId ) {
            return FirebaseCollection(FirebaseIO.child('user_profiles/' + userId + '/profile/projects'));
        },
        
        update: function( userId, projectId, projectObject ) {
            var id = projectId;
            
            FirebaseIO.child( 'user_profiles/' + userId + '/profile/projects/' + id ).update( projectObject );
            FirebaseIO.child( 'projects/' + userId + "/" + id ).update( projectObject );
        },
        
        remove: function( userId, projectId ) {
			
		},
        
        getCategories: function( ) { 
            return projectCategories;
        },
        
        getLabel: function( chosenCategory ) {

			var label;
			projectCategories.forEach( function( category ) {
				if ( category.name === chosenCategory ) 
					label = category.label;
			});
			
			return "label label-" + label;     
        },
        
        // Precondition: fileCategory is 'assets' or 'files'
        removeFile: function( userId, projectId, fileIndex, fileCategory, pathToFile ) {
            
            var data = $.param( { 'pathToFile' : pathToFile } );
            
            $http.post('application/user/file-remove.php', data , { headers: { 'Content-Type' : 'application/x-www-form-urlencoded' } } ).success( function( result ) {
                if ( result.success === true ) {
					FirebaseIO.child( 'user_profiles/' + userId + '/profile/projects/' + projectId + '/' + fileCategory + '/' + fileIndex ).remove();
					FirebaseIO.child( 'projects/' + userId + "/" + projectId + '/' + fileCategory + '/' + fileIndex ).remove();
				}
				else {
					alert(result.error);
				}
            });
        }
    }
}]);