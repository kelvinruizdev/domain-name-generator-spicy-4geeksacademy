/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { name } from "file-loader";

var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

//GENERA DOMINIOS CON EXTENSIONES .com
function generateDomainDaCom(pronoun, adj, noun) {
  let auxNameDomain = "";
  let arrDomains = [];
  let nameDomain = "";

  for (let i = 0; i < pronoun.length; i++) {
    nameDomain = pronoun[i];

    for (let j = 0; j < adj.length; j++) {
      nameDomain += adj[j];

      for (let k = 0; k < noun.length; k++) {
        auxNameDomain = pronoun[i] + adj[j]; //guarda el string
        nameDomain += noun[k];
        arrDomains.push(nameDomain + ".com");
        nameDomain = auxNameDomain; //resetea el string
      }
      nameDomain = pronoun[i];
    }
  }
  return arrDomains;
}

//GENERA DOMINIOS CON EXTENSIONES DISTINTAS
function generateDomainDaExtension(pronoun, adj, noun) {
  let extensions = [".com", ".net", ".io", ".edu"];
  let auxNameDomain = "";
  let arrDomains = [];
  let nameDomain = "";

  for (let i = 0; i < pronoun.length; i++) {
    nameDomain = pronoun[i];

    for (let j = 0; j < adj.length; j++) {
      nameDomain += adj[j];

      for (let k = 0; k < noun.length; k++) {
        auxNameDomain = pronoun[i] + adj[j]; //guarda el string
        nameDomain += noun[k];
        arrDomains.push(
          nameDomain + extensions[Math.floor(Math.random() * extensions.length)] //aleatoriza la extension
        );
        nameDomain = auxNameDomain; //resetea el string
      }
      nameDomain = pronoun[i];
    }
  }
  return arrDomains;
}

//GENERA "domain hacks"
function generateDomainShort(pronoun, adj, noun) {
  let auxNameDomain = "";
  let arrDomains = [];
  let nameDomain = "";
  let doExtension = "";

  for (let i = 0; i < pronoun.length; i++) {
    nameDomain = pronoun[i];

    for (let j = 0; j < adj.length; j++) {
      nameDomain += adj[j];

      for (let k = 0; k < noun.length; k++) {
        auxNameDomain = pronoun[i] + adj[j]; //guarda el string
        doExtension = "." + noun[k].substring(noun[k].length - 2); //crea la extension con 2 ultimos caracteres
        nameDomain += noun[k].slice(0, -2) + doExtension;
        arrDomains.push(nameDomain);
        nameDomain = auxNameDomain; //resetea el string
      }
      nameDomain = pronoun[i];
    }
  }
  return arrDomains;
}

window.onload = function() {
  //write your code here
  console.log(generateDomainDaCom(pronoun, adj, noun));
  console.log(generateDomainDaExtension(pronoun, adj, noun));
  console.log(generateDomainShort(pronoun, adj, noun));
};
