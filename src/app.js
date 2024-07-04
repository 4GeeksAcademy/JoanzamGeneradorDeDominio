/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generadorDominio() {
    let resultado;
    let pronouns = ["that", "my"];
    let adjs = ["small", "bab"];
    let nouns = ["sea", "school"];
    let dominios = [];

    pronouns.forEach((pronouns) => {
      adjs.forEach((adjs) => {
        nouns.forEach((nouns) => {
          let dominio = pronouns + adjs + "com";
          dominios.push(dominio);
        });
      });
    });
    return dominios;
  }
  let dominioTotal = generadorDominio();
  console.lot(dominioTotal);
  resultado = document.getElementById("dominio").innerHTML = resultado;
  pronouns.forEach((pronouns) => {});
};
