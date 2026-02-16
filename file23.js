let numbers=[5,3,6,1]

//we use foreach to shorten the for loop
numbers.forEach((number)=>{
    console.log(number)
})

//we use map to create a new array and do not modify the original one
//numbers.map(()=>{})
const newArray=numbers.map((number)=>{
    return number+1
})
console.log(newArray)

//we use filter to search anything on the basis of requirement and returns array
//numbers.filter(()=>{})
const even=numbers.filter((number)=>{
    return number%2===0
})
console.log(even)

//To get the first element that matches a condition and returns object
//numbers.find(()=>{})
const a=numbers.find((number)=>{
     //return number===3
     return number>3
})
console.log(a)


//To reduce an array into a single value
//numbers.reduce(()=>{})
const result=numbers.reduce((sum,number)=>{
    return sum+number 
},0)
console.log(result)


//we use some() to check if at least one element in an array satisfies a condition.
//numbers.some(()=>{})
// const r=numbers.some((number)=>{
//     return number>1
// })
// console.log(r)

let marks=[78,50,90,20]
const res=marks.some((mark)=>{
    return mark>50
})
if(res) console.log("Pass")
else
    console.log("Fail")
console.log(res)



//numbers.every(()=>{})
// const r=numbers.every((number)=>{
//     return number>2
// })
// console.log(r)

let marksheet=[78,50,90,20]
const r=marks.every((mark)=>{
    return mark>50
})
if(r) console.log("Pass")
else
    console.log("Fail")
console.log(r)