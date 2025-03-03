//find a given array with marks of students -> [444,501,654,900,1010].Find the average marks of the entire class.
let marks = [44,50,65,90,10];
let sum =0;
// sum= (average[0]+average[1]+ average[2]+average[3]+average[4]);
// console.log(sum);
for (let value of marks) {
    // console.log(marks);
    // sum = sum+marks;
    sum += value;
}
console.log(sum);
let average = sum/marks.length;
console.log('avg marks of the class = ',average);
