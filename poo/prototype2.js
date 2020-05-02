'use strict';
//Funções contrutoras
//Não quero que a função latir e morder sejam criadas toda vez
//solução no arquivo quase_heranca3.js
console.log('Animal Parte I');
function Animal(qtdePatas){
  this.qtdePatas = qtdePatas;
  this.movimentar = function(){}
}

function Cachorro(morde){
  Animal.call(this, 4);

  this.morde = morde;
  this.latir = function(){
    console.log('Au! au');
  }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);

//Solução para não ficar criando as funções toda vez que instanciar é
//colocar essas funções no PROTOTYPE
console.log('Animal2 Parte II')
function Animal2(){}

Animal2.prototype.qtdePatas = 0;
Animal2.prototype.movimentar = function(){}

function Cachorro2(morde){
  this.qtdePatas = 4;
  this.morde = morde;
}

Cachorro2.prototype = Object.create(Animal);
Cachorro2.prototype.latir = function(){
  console.log('Au! Au!');
}
Cachorro2.prototype.despenar = function(){}

const pug2 = new Cachorro2(false);
const pitbull2 = new Cachorro2(true);

console.log(pug2);
console.log(pitbull2);
console.log(pitbull2.__proto__);
