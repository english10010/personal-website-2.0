var app = angular.module('persoanlApp',[]);

app.controller('loadingController', ['$scope', function ($scope) {
    $scope.$watch('$viewContentLoaded', function(){
        $('#loading').fadeOut();
        $( "#modal_command").draggable({ handle: ".modal-header" });
    });
}]);

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
        $scope.$broadcast('to-child', true);
    };
}]);

app.controller('modalController', ['$scope', function ($scope) {
    $scope.$on('to-child', function(event,data) {
        $scope.command_show = data;
    });
    $scope.min_modal = function ($event) {

    };
    $scope.max_modal = function ($event) {
        $event.stopPropagation();
        var $modal = jQuery($event.target).parents('#modal_command');
        $modal.css({"top":0, "left":0, "width": $(window).width(), "height": $(window).height()});
    };
    $scope.close_modal = function ($event) {
        $event.stopPropagation();
        var $modal = jQuery($event.target).parents('#modal_command');
        $scope.command_show = false;
        $modal.css({"top":"100px", "left":0, "width": "500px", "height": "400px"});
    };
}]);

app.controller('barController', ['$scope', '$interval', function ($scope, $interval) {
    $interval(function(){
        var date = new Date();
        $scope.time = format(date.getHours()) + ":" + format(date.getMinutes());
        $scope.date = format(date.getFullYear()) + "/" + format(date.getMonth()) + "/" + format(date.getDate());
    },1000);
}]);