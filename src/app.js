/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "your"];
let adj = ["informative", "real"];
let noun = ["site", "portal"];
let extension = [".com", ".net", ".org"];

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          let result = `${pronoun[i]}${adj[j]}${noun[k]}${extension[l]}`;
          let element = document.getElementById("domain");
          element.innerHTML = result;
        }
      }
    }
  }
};
