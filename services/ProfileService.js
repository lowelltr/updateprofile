"use strict";

function ProfileService() {
    const vm = this;
    vm.userProfile = {
        name: "Melly Mel the Owl",
        contact:"eatingchirpus@gmail.com",
        bio:"I'm full of wisdom and have cool rhymes."
    };
    
    vm.getUserProfile = function (){
        return vm.userProfile;
    }
    vm.setUserProfile = function (newInfo){
        vm.userProfile = newInfo;
        return vm.userProfile;
    }
}



    angular
     .module("Pro")
     .service("ProfileService", ProfileService)