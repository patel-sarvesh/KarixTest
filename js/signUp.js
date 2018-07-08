angular.module('portal')

.controller('signUpCtrl', function($scope, toastr) {

    var presentDate = new Date();
    var currentDate = presentDate.getDate();
    var currentMonth = presentDate.getMonth()+1;
    var currentYear = presentDate.getFullYear();
    $scope.maxDate = currentYear+'-'+ ((currentMonth < 10) ? '0'+currentMonth : currentMonth)+'-'+((currentDate < 10)? '0'+currentDate : currentDate);
    $scope.doSignUp = function(userDetails) {
        var dobDate = userDetails.dob.getDate();
        var dobMonth = userDetails.dob.getMonth()+1;
        var dobYear = userDetails.dob.getFullYear();
        var finalDob = ((dobDate < 10) ? '0'+dobDate : dobDate)+'-'+((dobMonth < 10) ? '0'+dobMonth : dobMonth)+'-'+dobYear;
        if(!userDetails.acceptTerms) {
            toastr.warning('Please accept Terms and Conditions.');
        }
        else if (!userDetails.password || !userDetails.username) {
            toastr.warning('Please enter valid info.');
        }
        else {
            toastr.success('Successfully Sign-Up!');
            console.log( 'Name :' + userDetails.username);
            console.log( 'Email :' + userDetails.emailId);
            console.log( 'DOB :' + finalDob);
        }
    }

})