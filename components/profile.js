"use strict";

const profile={
        template:`
        
        <figure>
        <img src="components/images/owl.jpeg" alt="Owl">
        <div></div>
        <figcaption>
            <h1 id ="name">{{$ctrl.updateInfo.name}}</h1>
            <span id="contact">{{$ctrl.updateInfo.contact}}</span>
            <p id="bio">{{$ctrl.updateInfo.bio}}</p>
        </figcaption>
        <a href="#!/editProfile">
            <button>Edit</button>
        </a>
        </figure>
        
        `,

controller: ["ProfileService", function (ProfileService) {
    const vm = this;
    vm.updateInfo = ProfileService.getUserProfile();

}]

}
angular
        .module("Pro")
        .component("profile",profile);