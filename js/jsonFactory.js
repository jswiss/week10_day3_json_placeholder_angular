angular.module('jsonApp')
	.factory('JsonFactory', function($http, $q) {
		var JsonFactory = {
	    getComments: function() {
	      var deferred = $q.defer();

	      $http
	        .get('http://jsonplaceholder.typicode.com/comments')
	        .success(function(response) {
	          deferred.resolve(response);
	        })
	        .error(function(error) {
	          deferred.reject(error);
	        })

	        return deferred.promise;
			},

			postComment: function() {
				var deferred = $q.defer();

				$http
	       	.post('http://jsonplaceholder.typicode.com/comments')
	       	.success(function(response) {
	          deferred.resolve(response);
	        })
	        .error(function(error) {
	          deferred.reject(error);
	        })

	        return deferred.promise;
			}
		}

		return JsonFactory;

	})

