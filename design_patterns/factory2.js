function Pessoa(customProperties){
  return {
    name: 'Genival Silva',
    lastName: 'Cabrini',
    ...customProperties
  }
}

const p = Pessoa({name: 'Custom Name', age: 27});
console.log(p);
