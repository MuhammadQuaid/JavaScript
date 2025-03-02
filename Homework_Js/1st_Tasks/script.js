//Write a program to calculate the sum, difference, product, and modules of two number.
let a = 3;
let b = 9;
let c = 15
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a / b =", a / b);
console.log("a * b =", a * b);
console.log("a % b =", a % b);
console.log("a + c =", a + c);
// Write a  program to update the value of a variable using +=, -=, *=, and /= operators.
console.log("a += b =", a += b);
console.log("a -= b =", a -= b);
console.log("a /= b =", a /= b);
console.log("a *= b =", a *= b);
 //Write a  program to check if a number is between 10 and 20 using comparison and logical operators.
let q=4;
if (q>=10==q<=20) {
    console.log("true");
    
} else {
    console.log("false");
    
}
//Write a  program to check if a number is even or odd using an if-else statement.
let y = 2;
if (y %2 ==0) {
    console.log('even');
    
    
} else {
    console.log('odd');
}

// Write a  program to check if a number is positive, negative, or zero using else-if
let num = -2;
if (num>=1) {
    console.log("The number is positive =", num);
} else if (num<=-1) {
    console.log("The number is negative =", num);
} else{   console.log("The  is zero =", num);
}

//  // Write a  program to print the day of the week based on a number (1-7) using a switch statement.
function Week(Number) {
    switch (Number) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Invalid day number. Please enter a number between 1 and 7.";
    }
  }
  
  // Example usage:
  console.log(Week(3));
  console.log(Week(8)); 
// const week=1;
// switch( week) {
//     case value1  :
//         console.log("Monday");
//         break;
//         case value2:
//             console.log("Tuesday");
            
//             break;
//             case value3:
//                 console.log("Wednesday");
                
//                 break;
//                 case value4:
//                     console.log("Thuesday");
                    
//                     break;
//                     case value5:
//                         console.log("Firday");
                        
//                         break;
//                         case value6:
//                             console.log("Satureday");
                            
//                             break;
//                             case value7:
//                                 console.log("Sunday");
                                
//                                 break;

//     default:
//         console.log("Vilated number");
        
//         break;
// }

// Write a  program to check if a number is greater than 10 using the ternary operator.
let l = -23;
let result = l >= 18 ? "number is greater than 10" : "number is NOT greater than 10";
console.log(result);

// Write a  function to add two numbers and return the result.
const z = (a, b) => a + b;
console.log(z(5, 3)); // Output: 8
//Write a  program using an arrow function to multiply two numbers. Pass this function as a callback to another function
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // Output: 15
//Write a  program to simulate a weather app that checks the temperature and provides weather updates. Your program should demonstrate the differences between global, function, and block scope using the following requirements:
// Declare a global variable globalTemperature to store the current temperature in Celsius. This variable should be accessible everywhere in the program.
// Create a function scopecheckWeather() that declares a variable weatherCondition (e.g., "Sunny", "Rainy", "Cloudy"). his variable should be accessible only inside the function.
// Inside the check Weather() function, use an if-else block to check the value of globalTemperature.Declare a block-scoped variable message inside the if-else block to provide a weather update (e.g., "It's a warm day!", "It's cold outside!"). This variable should be accessible only inside the block.
// Global scope
const weatherUpdate = "Today's weather: ";

function checkWeather(temp) {
  // Function scope
  let weatherCondition;

  if (temp > 30) {
    // Block scope
    const message = "It's a hot day!";
    weatherCondition = message;
  } else if (temp > 20) {
    // Block scope
    const message = "It's a warm day!";
    weatherCondition = message;
  } else {
    // Block scope
    const message = "It's a cold day!";
    weatherCondition = message;
  }

  return weatherUpdate + weatherCondition;
}

// Example usage
console.log(checkWeather(35)); // Output: Today's weather: It's a hot day!
console.log(checkWeather(15)); // Output: Today's weather: It's a cold day!