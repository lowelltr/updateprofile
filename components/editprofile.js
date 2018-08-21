"use strict";
const editProfile={
            template:`
            <form>
                    <h1> Use the form below to update your profile.</h1>
                    <label class="info">Name</label>
                    <input type="text"ng-model="$ctrl.newInfo.name" id="name">
                    <label>Contact</label>
                    <input type="text"ng-model="$ctrl.newInfo.contact" id="contact">
                    <label>Bio</label>
                    <input type="text"ng-model="$ctrl.newInfo.bio"id="bio">
                    <a href="#!/profile">
                    <button type="button" id="update" ng-click="$ctrl.update($ctrl.newInfo);">Update</button>
                </a>     
            </form>
            `,

    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.update= (newInfo)=>{
            ProfileService.setUserProfile(newInfo);
        }
        //vm.updateInfo = function (newInfo) {
       //     vm.updateInfo = ProfileService.setUserProfile(newInfo);
        
    }]

};


    angular.module("Pro")
    .component("editProfile", editProfile);