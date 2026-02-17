function getStudentInfo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const student={
                name:"Debosmita",
                email:"debo@gmail.com",
                age:21
            }
            resolve(student)

        },2000)
    })
}
// function displayInfo(student){
//     console.log(student.name)
// }
function displayInfo({name}){
    console.log(name)
}
async function main(){
    try{
        const result= await getStudentInfo()
        displayInfo(result);
        console.log("Program completed successfully")
    }
    catch (err) {
        console.log(err);
    }
}
main()



//getStudentInfo should return name,email and age