let score = prompt ("enter your score(0-100):");
let grade;

if (score >=90 && score <=100) {
    grade ="A";
} else if (score>=80 && score<90) {
    grade ="B";
}  else if (score>=70 && score<80) {
    grade ="C+";
}  else if (score>=60 && score<70) {
    grade ="C";
}  else if (score>=45 && score<60) {
    grade ="D";
} else if (score>=0 && score<45) {
   grade  ="Not Pass";
}
console.log("According to your score Grade =", grade);


