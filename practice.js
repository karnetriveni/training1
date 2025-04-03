// const arr=[1,2,3];
// const[first,second,third]=arr;
// console.log(first,second,third);

// //Destructing for objects
// const obj={employeeId:1,
//     employee:"Ram",
//     employeeSalary:5000,c
//     address:"Kodad",
//     }
//     const{employeeId,employee,employeeSalary,address}=obj;
//     console.log(employeeId,employee,employeeSalary,address);

    //Rest operator
    // const arr2=["Hi",2,3,4,5];
    // const[firstString,...remaining]=arr2;
    // console.log(remaining);

    // function displayNames(...a){
    //     console.log(`The names are:${a}`)
    // }
    // displayNames("Ram","charan","prabhas","Mahesh","Allu arjun")

    //spread in arrays

    // const arr3=["a","b","c"];
    // const dummy=["apple","banana"]
    // const arr4=[arr3,...dummy];
    // console.log(arr4);
    // arr3.push("d");
    // console.log(arr3);

    //spread in objects
    // const car1={name:"bmw",price:"1cr"};
    // const car2={color:"White",enginecc:5500}
    // const car={...car1,...car2};
    // console.log(car);

    //callback
    // function square(val){
    //     return val*val
    // }
    // function cube(val){
    //     return val*val*val
    // }
    // function sumofSquares(val1,val2){
    //     let firstValue=square(val1);
    //     let secondValue=square(val2);
    //     return firstValue+secondValue
    // }
    // const ans=sumofSquares(2,3);
    // console.log(ans);
    
    // function sumofCubes(val1,val2){
    //     let firstValue=cube(val1);
    //     let secondValue=cube(val2);
    //     return firstValue+secondValue
    // }
    // const answer=sumofCubes(2,3);
    // const ans=sumofCubes(2,3);
    // console.log(ans);

 //Asynchronous behavior of javascript
//  console.log("Hello");
//  let count=0;
//  for(let i=0;i<100;i++){
//     count=count+i
//  };
//  console.log(count);
//  console.log("Bye")
// console.log("Hello");
// let count=0;
// for(let i=0;i<100;i++){
//    count=count+i
// };
// console.log(count);
// setTimeout(()=>{
//     console.log("After 3 seconds");
// },3000);
// console.log("Bye");

//Handling the Asynchronous operations 
// function task1(){
//     setTimeout(()=>{
//         console.log("Task 1 is done")
//     },3000)
// }
// function task2(){
//     setTimeout(()=>{
//         console.log("Task 2 is done")
//     },1500)
// }
// task1();
// task2();
function task1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isTask1Done = true;
        if (isTask1Done) {
          console.log("Task 1 is done");
          resolve();
        } else {
          reject("Task1 is not done");
        }
      }, 3000);
    });
  }
  function task2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Task 2 is done");
        resolve();
      }, 1500);
    });
  }
  
  // async/await
  
  function excecuteAlltasks() {
    try {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((data) =>{ 
          return data.json()
        })
        .then((val) => console.log(val));
    } catch (error) {
      console.log(error);
    }
  }
  excecuteAlltasks();
  
