'use strict';

const symbol1 = Symbol("name");
const symbol2 = Symbol("name");

//Symbols são únicos
console.log('symbol1 é igual a symbol2: ', symbol1 == symbol2);

//Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
  [nameSymbol1]: 'Guilherme',
  [nameSymbol2]: 'Outro nome',
  lastName: 'Cabrini da Silva',
  endereco: 'Rua dos abacaxis'
}

console.log(user);

//Symbols criam propriedades que não são enumberables
for(const key in user){
  if (user.hasOwnProperty(key)){
    console.log(`\nValor da chave ${key}: ${user[key]}`);
  }
}
