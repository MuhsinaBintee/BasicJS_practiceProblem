//Q1
/*
const marks={
  "Tanim":93,
  "Labib":82,
  "Samanta":98,
  "Biplob":88,
  "Bintee":97
}
for(let i=0;i<Object.keys(marks).length;i++){
  console.log("The marks of "+ Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]])
}
*/
//Q2
/*
for(let i in marks){
  console.log(i," : ",marks[i])
}
*/
//Q3
/*
let num=10;
let x;
x=parseInt(prompt("Enter a number :"))
while(num!=x){
  console.log("Try again")
  x=parseInt(prompt("Enter a number :"))
}
console.log("You entered correct number")
*/
//Q4
/*
const mean=(a,b,c,d,e)=>{
  return (a+b+c+d+e)/5;
}*/
function mean(a,b,c,d,e){
  return (a+b+c+d+e)/5;
}
console.log(mean(4,5,6,7,8))
