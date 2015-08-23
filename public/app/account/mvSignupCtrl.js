angular.module('app').controller('mvSignupCtrl',function($scope,mvUser,mvNotifier,$location,mvAuth){
    $scope.signup = function(){
        var newUserData = {
            username : $scope.email,
            password : $scope.password,
            FirstName : $scope.fname,
            LastName : $scope.lname

        };

        mvAuth.createUser(newUserData).then(function(){
            mvNotifier.notify('User Account created');
            $location.path('/');
        },
            function(reason){
                mvNotifier.error(reason);

            }
        )
    }
})