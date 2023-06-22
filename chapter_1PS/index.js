//Q1
let s="Bintee"
console.log(typeof(s))
let n=50
console.log(typeof(n))
s=s+n
console.log(s)
//Q2
console.log(typeof(s))
//Q3
const result={
  "Rahul":87,
  "Kriti":92,
  "Suresh":74
  
}
result["Kriti"]=56
console.log(result["Kriti"])
//Q4
result["Biplob"]=92
for(key in result){
  console.log(key,result[key])
}
//Q5
const dictionary={
  "mendicant":"a pauper who lives by begging",
  "vitiate":"make imperfect",
  "hoary":"having gray or white hair as with age",
  "odium":"hate coupled with disgust",
  "grandiloquent":"lofty in style"
}
for(key in dictionary){
  console.log(key,":",dictionary[key])
}
