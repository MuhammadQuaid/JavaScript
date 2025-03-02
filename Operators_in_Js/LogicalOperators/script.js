let a = 9;
let b = 7;
let c = 5;
let con1 = a > b; //true
let con2 = a===9; //true
let con3 = b===4; //false
let con4 = c < 2; //false
console.log("con1 && cond2=",con1 && con2);
console.log("con1 && cond3=",con1 && con3);
console.log("con3 && cond2=",con3 && con2);
console.log("con1 || cond2=",con1 || con2);
console.log("con3 || cond4=",con3 || con4);
console.log("!(9>7) = ", !(a===8));
console.log( !a===9);
