// function getStudentInfo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const student={
//                 name:"Debosmita",
//                 email:"debo@gmail.com",
//                 age:21
//             }
//             resolve(student)
//         },2000)
//     })
// }
// function getAttendanceInfo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const attendance={
//                 percentage:80,
//                 status:"Good"
//             }
//             resolve(attendance)
//         },3000)
//     })
// }
// function getExamInfo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const exam={
//                 subject:"Mathematics",
//                 marks:85
//             }
//             resolve(exam)
//         },4000)
//     })
// }
// function displayInfo({name,percentage,status,subject,marks}){
//     console.log(name,percentage,status,subject,marks)
// }
// async function main(){
//     try{
//         const student= await getStudentInfo()
//         const attendance= await getAttendanceInfo()
//         const exam= await getExamInfo()
//         displayInfo({...student,...attendance,...exam});
//         console.log("Program completed successfully")
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// main()




function getStudentInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userObj = {
        name: "John",
        email: "john@gmail.com",
        age: 21,
      };
      resolve(userObj);
    }, 2000);
  });
}

function getExamInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Exam Info Resolved");
    }, 3000);
  });
}

function getAttendanceInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Attendance Info Resolved");
    }, 1000);
  });
}
function displayInfo({ name }) {
  console.log(name);
}

async function main() {
  //   const result = await getStudentInfo();
  const result = await Promise.all([
    getStudentInfo(),
    getAttendanceInfo(),
    getExamInfo(),
  ]);
  console.log(result)
//   displayInfo(result);
  console.log("Student has been promoted");
}
main();

