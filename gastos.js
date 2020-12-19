const $boton = document.querySelector("[type=submit]");
const $menu = document.querySelector("#principal")
const $form = document.querySelector("#calculos");
let $daily = document.querySelector("#daily-expenses");
let $splurge = document.querySelector("#splurge");
let $smile = document.querySelector("#smile");
let $fireExt = document.querySelector("#fire-ext");
let $alquiler= document.querySelector("#alquiler");
let $ocio= document.querySelector("#ocio");
let $alimentacion= document.querySelector("#alimentacion");
let $ahorro= document.querySelector("#ahorro");
$boton.onclick = function (){
    let $sueldoNeto = document.querySelector("#sueldo-neto").value;
    $daily.textContent="";
    $splurge.textContent="";
    $smile.textContent="";
    $fireExt.textContent="";
    $alquiler.textContent="";
    $ocio.textContent="";
    $alimentacion.textContent="";
    $ahorro.textContent=""; 
    let calculo1 = document.createTextNode(`$${($sueldoNeto*0.6).toFixed(2)}`);
    $daily.appendChild(calculo1);
    let calculo2 = document.createTextNode(`$${($sueldoNeto*0.1).toFixed(2)}`);
    $splurge.appendChild(calculo2);
    let calculo3 = document.createTextNode(`$${($sueldoNeto*0.1).toFixed(2)}`);
    $smile.appendChild(calculo3);
    let calculo4 = document.createTextNode(`$${($sueldoNeto*0.2).toFixed(2)}`);
    $fireExt.appendChild(calculo4);
    let calculo5 = document.createTextNode(`$${(($sueldoNeto*0.60)*0.35).toFixed(2)}`);
    $alquiler.appendChild(calculo5);
    let calculo6 = document.createTextNode(`$${(($sueldoNeto*0.60)*0.15).toFixed(2)}`);
    $ocio.appendChild(calculo6);
    let calculo7 = document.createTextNode(`$${(($sueldoNeto*0.60)*0.30).toFixed(2)}`);
    $alimentacion.appendChild(calculo7);
    let calculo8 = document.createTextNode(`$${(($sueldoNeto*0.60)*0.20).toFixed(2)}`);
    $ahorro.appendChild(calculo8);
    return false;
}
