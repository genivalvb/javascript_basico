'use strict';
//Funcionará no JavaScript12 no nodesjs
class Person {
  #name = '';

  constructor(initialName){
    this.#name = initialName;
  }

  setName(name){
    this.#name = name;
  }

  getName(){
    return this.#name;
  }
}

p = new Person('Genival');
// Person {}

p.getName();
//"Genival"

p.name;
//undefined

p.setName('Melina');
p.getName();
//Melina
