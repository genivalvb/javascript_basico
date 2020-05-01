function Pessoa(){
  if(!Pessoa.instance){
    Pessoa.instance = this;
  }
  return Pessoa.instance;
}

const p = Pessoa.call({name: 'Melina'});
const p2 = Pessoa.call({name: 'Dulciana'});

console.log(p);
console.log(p2);
