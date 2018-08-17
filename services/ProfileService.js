"use strict";

function ProfileService() {
    const vm = this;
    vm.userProfile = {};
    
    vm.getUserProfile = function (){
        console.log(info);
        return vm.userProfile;
    }
    vm.setUserProfile = function (editUserProfile){
        vm.userProfile = editUserProfile;
        return vm.userProfile;
    }
}



    angular
     .module("Pro")
     .service("ProfileService", ProfileService)