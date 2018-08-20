"use strict";
const editProfile={
            template:`
            <form>
                    <h1> Use the form below to update your profile.</h1>
                    <label>Name</label>
                    <input type="text"ng-model="$ctrl.updateInfo.newName">
                    <label>Contact</label>
                    <input type="text"ng-model="$ctrl.updateInfo.newContact">
                    <label>Bio</label>
                    <input type="text"ng-model="$ctrl.updateInfo.newBio">
                    <a href="#!/editProfile">
                    <button ng-click="$ctrl.updateInfo($ctrl.updateInfo.newInfo)">Update<button>
                    </a>
            </form>
            `,

    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.updateInfo = ProfileService.getUserProfile();
        vm.updateInfo = function (newInfo) {
            vm.updateInfo = ProfileService.setUserProfile(newInfo);
        }
    }]
}



    angular.module("Pro")
    .component("editProfile", editProfile);