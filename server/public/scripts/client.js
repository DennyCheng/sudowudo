var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
      when("/jimmy", {

        templateUrl: "/views/partials/jimmy.html",
        controller: "jimmyController"
      }).
      when("/frank", {
        templateUrl: "/views/partials/frank.html",
        controller: "frankController"
      }).
      when("/odeza", {
        templateUrl: "/views/partials/odeza.html",
        controller: "odezaController"
      }).
      when("/tlc", {
        templateUrl: "/views/partials/tlc.html",
        controller: "tlcController"
      }).
      when("/jcole", {
        templateUrl: "/views/partials/jcole.html",
        controller: "jcoleController"
      }).
      otherwise({
        redirectTo: "/frank"
        //redirects to cats statement if nothing matches
      });
}]);

myApp.controller("jimmyController", ["$scope", function($scope){
  // myApp.controller("mainController", function($scope){}) this is a way or add an array and
//list out specifially what dependensies it has using ["$scope",func] format
    console.log("Jimmy eat world!");
}]);

myApp.controller("frankController", ["$scope", function($scope){
    console.log("Frank oceannnn");
}]);

myApp.controller("odezaController", ["$scope", function($scope){
    console.log("Odeza");
}]);

myApp.controller("tlcController", ["$scope", function($scope){
    console.log("TlC");
}]);
myApp.controller("jcoleController", ["$scope", function($scope){
    console.log("Jcole");
}]);
