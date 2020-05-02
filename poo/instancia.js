
'use strict';
function Animal(){
  'use strict';
  this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas);
//4

//function Pessoa(name){
//  this.name = name;
//}

function Pessoa(name){
  this.name = name;
  return{
    name
  };
}

const p = new Pessoa('Genival');

console.log(p);

const p2 = new Pessoa("Dulciana");
console.log(p2);
