"use strict";

const profile={
        template:`
        
        <figure>
        <img src="components/images/owl.jpeg" alt="Owl">
        <div></div>
        <figcaption>
            <h1>Melly Mel the Owl<h1>
            <span id="contact">eatingchirpus@gmail.com</span>
            <p id="bio">I'm full of wisdom and have cool rhymes.</p>
            <h1>{{$ctrl.info.name}}</h1>
            <span id="contact">{{$ctrl.info.contact}}</span>
            <p id="bio">{{$ctrl.info.bio}}</p>
        </figcaption>
        <a href="#!/editProfile">
            <button>Edit</button>
        </a>
        </figure>
        
        `,

controller: ["ProfileService", function (ProfileService) {
    const vm = this;
    vm.updateInfo = ProfileService.userProfile;

}],
bindings: {
    
}
}
angular
        .module("Pro")
        .component("profile",profile);