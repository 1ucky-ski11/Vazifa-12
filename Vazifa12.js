'use strict'

//12 A
// const add = function (){
//     console.log(2+3)
// }
// add()
// add()



//12 B
//
// const add = function (){
//     console.log(2+3)
// }
// add()
// add()
//
// function runTwise (fun){
//     fun()
//     fun()
// }
// runTwise(function (){
//     console.log('12b')
// })




//12 C

// function updateButton (){
//     const button = document.querySelector('js-button')
//
//     setTimeout(function (){
//         button.innerHTML= 'Finished'
//     },1000)
// }




// 12 D

// function updateButton (){
//     const button = document.querySelector('js-button')
//
//     button.innerHTML = 'Loading...'
//     setTimeout(function (){
//         button.innerHTML= 'Finished'
//     },1000)
// }




//12 E

// function displayMessage (){
//     const messageElement = document.querySelector('js-button')
//     messageElement.innerHTML = 'Added'
// }
// setTimeout(function (){
//     messageElement.innerHTML =''
// },2000)




//12 F
// let timeoutId;
//
// function displayMessage (){
//     const messageElement = document.querySelector('js-button')
//     messageElement.innerHTML = 'Added'
// }
//
// clearTimeout(timeoutId)
//
// timeoutId =  setTimeout(function (){
//     messageElement.innerHTML =''
// },2000)



//12 G
//
// setInterval(function (){
//     if (document.title === 'App'){
//         document.title = '(2)messages';
//     }else {
//         document.title = 'App'
//     }
// },1000)



//12 H
//
// let messages = 2
//
// setInterval(function (){
//     if (document.title === 'App'){
//         document.title = `(${messages} New message)`;
//     }else {
//         document.title = 'App'
//     }
// },1000)




//12 I
// let messages = 2
// let intervalID;
// let isDisplayNotification;
//
//
// isDisplayNotification()
//
// if (isDisplayNotification){
//     return;
// }
//
// isDisplayNotification = true
// intervalID =  setInterval(function (){
//     if (document.title === 'App'){
//         document.title = `(${messages} New message)`;
//     }else {
//         document.title = 'App'
//     }
// },1000)
//
// function stopNotification(){
//     isDisplayNotification = false;
//     clearInterval(intervalID)
//     document.title = 'App'
// }