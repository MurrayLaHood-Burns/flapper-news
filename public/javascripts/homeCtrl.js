var app = angular.module('flapperNews');

app.controller('MainCtrl', [
  '$scope',
  'posts',
  'auth',

  function($scope, posts, auth) {
    $scope.isLoggedIn = auth.isLoggedIn; 

    $scope.test = 'Hello world!';

    $scope.posts = posts.posts;

    $scope.addPost = function() {
       
      if(!$scope.title || $scope.title === '') { return; }
      posts.create({
        title: $scope.title,
        link: $scope.link
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post){
      posts.upvote(post);
    };
  }
]);
