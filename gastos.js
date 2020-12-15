const $boton = document.querySelector("[type=submit]");
const $menu = document.querySelector("#principal")
$boton.onclick = function (){
    //$menu.classList.add("oculto");
    $menu.reset;
    let $sueldoNeto = document.querySelector("#sueldo-neto").value;
    const $daily = document.querySelector("#daily-expenses");
    const $splurge = document.querySelector("#splurge");
    const $smile = document.querySelector("#smile");
    const $fireExt = document.querySelector("#fire-ext");
    const $alquiler= document.querySelector("#alquiler");
    const $ocio= document.querySelector("#ocio");
    const $alimentacion= document.querySelector("#alimentacion");
    const $ahorro= document.querySelector("#ahorro");
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
