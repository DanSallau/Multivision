angular.module('app').controller('mvProfileCtrl',function($scope,mvAuth,mvIdentity,mvNotifier){
    $scope.email = mvIdentity.currentUser.username;
    $scope.fname = mvIdentity.currentUser.FirstName;
    $scope.lname = mvIdentity.currentUser.LastName;

    $scope.update = function(){
        var newUserData = {
            username : $scope.email,
            FirstName: $scope.fname,
            LastName : $scope.lname
        }

        if($scope.password && $scope.password.length >0){
            newuserData.password = $scope.password;

        }

        mvAuth.updateCurrentUser(newUserData).then(function(){
            mvNotifier.notify('Your User Account has been updated');
        },function(reason){
            mvNotifier.error(reason);

        })
    }

})