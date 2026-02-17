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
async function main(){
    try{
        const result= await getStudentInfo()
        console.log(result);
        console.log("Program completed successfully")
    }
    catch (err) {
        console.log(err);
    }
}
main()



//getStudentInfo should return name,email and age