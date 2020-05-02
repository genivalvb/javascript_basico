'use strict';

function Person(){}

Person.walk = function(){
  console.log('walking... 999');
}

console.log(Person.walk());
//walking...

console.log('Usando Classes 88');

'use strict';
class Person2{
  static walk(){
    console.log('Walking...777');
  }
}


console.log('Log da chamada da classe Person')
console.log(Person2.walk());
