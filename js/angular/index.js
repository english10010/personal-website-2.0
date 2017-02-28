var app = angular.module('persoanlApp',[]);

app.controller('windowController', ['$scope', function ($scope) {
    $scope.shortcuts = [
        {'imgUrl':'images/coding.png', 'text':'Command'},
        {'imgUrl':'images/icon.png', 'text':'Command'},
        {'imgUrl':'images/play.png', 'text':'Command'},
        {'imgUrl':'images/web-page.png', 'text':'Command'}
    ];
    $scope.shortcut_active = function ($event) {
        console.log("You Double Clicked!");
    };
}]);

app.controller('barController', ['$scope', '$interval', function ($scope, $interval) {
    var timer = $interval(function(){
        var date = new Date();
        $scope.time = format(date.getHours()) + ":" + format(date.getMinutes()) + ":" + format(date.getSeconds());
        $scope.date = format(date.getFullYear()) + "/" + format(date.getMonth()) + "/" + format(date.getDate());
    },1000);
}]);