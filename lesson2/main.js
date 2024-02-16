//#1
let x = 20
let y = 58
let z = 42

let sum = x + y + z

console.log(sum)

//#2
let sec = 60
let min = 60
let hours = 24
let days = 365

let myAgeInSeconds = 22*365*24*60*60
console.log(myAgeInSeconds)


//#3
let count = 42
let userName = '42'

let strCount1 = `count`
let strCount2 = String(userName)
console.log(typeof(strCount1)+" "+typeof(strCount2))

let numUserName1 = Number(userName)
// let numUserName2 = 
console.log(typeof(numUserName1)+" ")


//4
let a = 1
let b = 2
let c = 'белых медведей'

console.log(String(a)+String(b)+" "+c)


//5
let str1 = 'доступ'
let str2 = 'морпех'
let str3 = 'наледь'
let str4 = 'попрек'
let str5 = 'рубило'

let lengthWords = str1.length+str2.length+str3.length+str4.length+str5.length
console.log(lengthWords)

//6 
let num = 23
let str = 'String'
let bool = true
console.log("Variable str has type: " + typeof(str))
console.log("Variable num has type: " + typeof(num))
console.log("Variable bool has type: " + typeof(bool))


//7

let name = prompt("Enter name")
let age = prompt("Enter age")
console.log("User "+name+" is "+ age+" years old")


//pr1
let a1 = 4
let b1 = 3

a1 = Number((String(a1)+String(b1)))
b1 = Number((String(a1)+String(b1))[0])
a1 = Number((String(a1)+String(b1))[1])

console.log(a1+" "+b1)


//pr2
let codeWord1 = "обернись"
let codeWord2 = "неужели"
let codeWord3 = "огурцы"
let codeWord4 = "липкие"
let codeWord5 = "?!"

let cipher = String(codeWord1[1]+codeWord2[1]+codeWord3[1]+codeWord4[1]+codeWord5[1])

console.log(cipher)