let loggedIn = false;

function callIfAuthentication(fn){
  return !!loggedIn && fn();
}

function sum(a, b){
  return a + b;
}

console.log(callIfAuthentication(() => sum(2, 3)));
loggedIn = true;
console.log(callIfAuthentication(() => sum(2, 3)));
loggedIn = false;
console.log(callIfAuthentication(() => sum(2, 3)));
