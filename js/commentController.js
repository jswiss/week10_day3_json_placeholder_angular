angular.module('jsonApp').controller('CommentController', function(JsonFactory) {
	var self = this;

	  JsonFactory.getComments()
    .then(function(response) {
      self.comments = response;
      console.log(self.comments);
    });

    JsonFactory.postComment()
    .then(function(response) {
    	self.comment = response;
    	console.log(self.comment);
    });
});
