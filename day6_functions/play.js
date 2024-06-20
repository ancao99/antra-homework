// arr=[1,2,3]
// function sum(...number){
//     console.log(...number);
   
// }
// sum(...arr)
function delay(cb){
    setTimeout(()=>{
        cb();
    },2000);
}
function hello(){
    console.log("Hello");
}
delay(hello)