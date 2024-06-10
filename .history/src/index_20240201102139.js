let number =234567;
arr =[]
let str = String(number)
for (let i =0; i<str.length; i+=1) {
  if(str[i] %2 ===0) {
arr.push(str[i])

  }
  console.log (arr.length)
}