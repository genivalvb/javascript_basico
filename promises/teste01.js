

const fs = require('fs')

console.log("Antes da promises, talvez:")

fs.readFile('./promises/arquivo.txt',(err, texto)=> {
  console.log(`Escrevendo literal ${err} - ${texto}`)
})

console.log("Depois da promisese, quem sabe")
