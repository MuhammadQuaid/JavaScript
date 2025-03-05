// Use indexOf() to find the position of a specific color in your array.
let colors = ["red", "blue", "green", "yellow", "purple"];
// let index = colors.indexOf('blue')
// console.log(index);
let index = colors.indexOf('white') //Not in array to show -1
console.log(index);
// Use concat() to combine your colors array with another array of 3 more colors.
let Colours = ["red","blue"];
let Colors = ["Pink" , "green" , "white"];
let array= Colours.concat(Colors);
console.log(array,"concats Pink  green and white");
// Use push() to add a new color to the end of your array.
let color = ["red", "blue", "green", "yellow", "purple"];
color.push("white" , "black");
console.log(color ,"push = white and black"); // index= 6 and length=7
// Use pop() to remove the last color from your array.
let pop = ["red", "blue", "green", "yellow", "purple"];
pop.pop("green" , "black , red");
console.log(pop,"pop = white and black"); //not remove red b/c it's not end
// Use shift() to remove the first color from your array.
let red = ["red", "blue", "green", "yellow", "purple"];
red.shift(red);
console.log(red ,"remove red");
// Use unshift() to add a new color to the beginning of your array.
let white = ["red", "blue", "green", "yellow", "purple"];
white.unshift("white");
console.log(white , "add white a beginging");
// Use slice() to create a new array with the 2nd and 3rd elements from your colors array.
let slice = ["red", "blue", "green", "yellow", "purple"];
let aarray=slice.slice(1,3);
console.log(aarray);
console.log(slice);
// Use splice() to remove 2 elements from the middle of your array and replace them with 3 new colors.
let kkk = ["red", "blue", "green", "yellow", "purple"];
let kk=slice.slice(0,1).concat(kkk.slice(3));
console.log(kk);
// Create an array of numbers and use find() to locate the first number greater than 10.
let numbers = [5, 8, 12, 3, 15, 7];
console.log(numbers);
let result = numbers.find(numbers=> numbers>10);
console.log(result);
// Use filter() to create a new array containing only even numbers from your numbers array.
let qqq= numbers.filter(numbers=> numbers%2===0);
console.log(qqq);        //8,12
// Loops and Iteration
// Use a traditional for loop to log each color in your array along with its index.
for (let index = 0; index < colors.length; index++) {
    const element = colors[index];
    console.log(element);
}
// Use forEach() to log each color in uppercase.
colors.forEach(function name(val) {
    console.log(val.toUpperCase());
})

// Write a program that uses the reduce() method to check if all numbers in an array are even or if at least one number is odd
 let reduce = [2, 4, 6, 8, 10];
let output = reduce.reduce((pre,curr)=>{
    return pre && curr%2===0 ;
})
console.log(output);
let webDevelopment = [  
{ Name: "Daniyal", class: "basic" }, 
{ Name: "saliha", class: "basic" },  
{ Name: "Sameer", class: "Advance" },  
{ Name: "Sartaj", class: "Advance" },  
{ Name: "Naji", class: "basic" },  
{ Name: "shoaib", class: "Advance" }, 
{ Name: "Mumtaz", class: "basic" }
 ];
// Using the given webDevelopment array:
//Use filter() to separate "basic" and "Advance" students
let basicStudents = webDevelopment.filter (student => student.class === "basic")
console.log(basicStudents);
let AdvanceStudents = webDevelopment.filter (student => student.class === "Advance")
console.log(AdvanceStudents);
//Use map() to extract just the names from each filtered array
let webDevelopmentStudents = webDevelopment.map (student => student.class === "Advance")
console.log(webDevelopmentStudents);