"use strict";

const profile={
        template:`
        
        <figure>
        <img src="components/images/owl.jpeg" alt="Owl">
        <div></div>
        <figcaption>
            <h1>Melly Mel</h1>
            <span id="contact">stylingonyou@gmail.com</span>
            <p id="bio">I'm the guy you love to hate. Ask about me!</p>
        </figcaption>
        <a href="#!/editProfile">
            <button>Edit</button>
        </a>
        </figure>
        
        `
}


















angular
        .module("Pro")
        .component("profile",profile);