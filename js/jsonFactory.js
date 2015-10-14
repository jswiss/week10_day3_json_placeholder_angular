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
			},

			removeComment: function() {
				var deferred = $q.defer();

				$http
					.delete('http://jsonplaceholder.typicode.com/posts/1')
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
	.directive("contenteditable", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});

