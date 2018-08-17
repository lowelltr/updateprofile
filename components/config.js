"use strict";
/* How to use a route: .config with the name of the route, then a function
that takes the named route as a parameter.*/
    angular.module("Pro").config(["$routeProvider", function($routeProvider){
        $routeProvider
        .when("/editProfile", {
            template: `
            <edit-profile></edit-profile>
            `
        })
        .when("/profile", {
            template: `
            <profile></profile>
            `
        })
        .otherwise({
            
        })

    }])
    