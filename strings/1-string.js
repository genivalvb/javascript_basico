'use strict';

//Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

//Busca por um valor e substitui po outro
const replaceText = 'Text'.replace('Text','txeT');
console.log('\nSubstituição de valor:', replaceText);





//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
//Object.freeze(newObj);
console.log('\nVariável newObj antes as alterações:', newObj);
newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);
