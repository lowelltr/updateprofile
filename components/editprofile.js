"use strict";
const editProfile={
            template:`
            <form>
                    <h1> Use the form below to update your profile.</h1>
                    <label>Name</label>
                    <input type="text"ng-model="newName">
                    <label>Contact</label>
                    <input type="text"ng-model="newContact">
                    <label>Bio</label>
                    <input type="text"ng-model="newBio">
                    <a href="#!/editProfile">
                    <button ng-click="$ctrl.updateInfo">Update<button>
                    </a>
            </form>
            `,

    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.info = ProfileService.getUserProfile();
        vm.sendInfoToProfileService = function (newInfo) {
            vm.info = ProfileService.setInfo(newInfo);
        }
    }]
}



    angular.module("Pro")
    .component("editProfile", editProfile);