var app = angular.module('persoanlApp',[]);

app.controller('windowController', ['$scope', function ($scope) {
    $scope.shortcuts = [
        {'imgUrl':'images/coding.png', 'text':'Command'},
        {'imgUrl':'images/contacts.png', 'text':'Contacts'},
        {'imgUrl':'images/courses.png', 'text':'Courses'},
        {'imgUrl':'images/resume.png', 'text':'Resume'},
        {'imgUrl':'images/play.png', 'text':'Projects'},
        {'imgUrl':'images/web-page.png', 'text':'Command'}
    ];
    $scope.shortcut_active = function ($event) {
        $scope.modal_show = true;
    };
}]);

app.controller('barController', ['$scope', '$interval', function ($scope, $interval) {
    $interval(function(){
        var date = new Date();
        $scope.time = format(date.getHours()) + ":" + format(date.getMinutes());
        $scope.date = format(date.getFullYear()) + "/" + format(date.getMonth()) + "/" + format(date.getDate());
    },1000);
}]);