// console.log("Hello, World!")


/// variable stores data

// myname "John"
// profesion "Developer"


// variable name
/// pehle number nahi asakta
// let myname = "john"
// let profesion = "developer"
// 

// console.log(profesion)


// Variable Types
// Var // Global Scope Variable
// Let // Blocked Scope Variable
// Const // Blocked Scope Variable

// const 

// block
// {
//     var age = 19
// }








// {  
//     let a = 90;
//     console.log(a)
// }



// console.log(age);

// Var Depreceated

// const name2 = "Kashan"


// let name2 = "Kashan"
// name2 = "Adnan"



// const name2 = "Kashan"
// name2 = "Adnan"

// console.log(name2);

// Let Const


// Let  // Blocked Scope Variable
// Const // Blocked Scope Variable

// variable name

// assignment operator
// = 


// console.log(age)


// let age = 29;
/// if   agar(age === 90) // false




// if(age === 90){ // true // false
//     console.log("Hi, it is working!");   
// }
///

// Number
// String


// What is array ?
// Array

// ["Kashan", 129, "Adnan"]


// let array = ["Alishba", "Iqra", "Noreen Jahan"]

// array.push("Hello")

// console.log(array);

// array.pop()
// array.push("Kashan")
// 4
// ["Alishba","Iqra", "norreenn....", "Kashan"]

// array.shift() //Removes the first element from the array
// 
// array.unshift("Hello")


// 4


// let newArray = array.slice(1,3)

// console.log(newArray);
// 
// console.log(array);

// console.log(array.length);


//     0        1        2        3
// ["Hello", "Iqra", "Noreen", "Kashan"]

// splice


// let newArr = array.splice(3,1, "Adnan", "Lahore", "pakistan")
// console.log(array);



/// What is for loop?
//// initialization; condition; incrementation
// for (initialization; condition; update) {
//   // code block to be executed
// }
// 0 + 1 =1
// 1 + 1 =2
// 2 + 1 =3
// 3 + 1 =4
// 4 + 1 =5
// 9 + 1 =10 
// false

//             1 < 10  
// for(let i = 0; i < 10; i += 1){ // true
//     console.log("Hello it worked")
// }


// exact same as forloop
// while loop
// let i = 0
// while(i < 10){
//     console.log("it worked but in while loop")
//     i += 1
// }






// For Loop
// Repeat 


// console.log("Hello 1")
// console.log("Hello 2")
// console.log("Hello 3")
// console.log("Hello 4");
// console.log("Hello 5");


// for
// initialization condition increment
//                0 < 11    true
//                1 < 11    true
//                2 < 11    true
//                3 < 11    true
//                4 < 11    true
//                5 < 11    true
//                6 < 11    true
//                7 < 11    true
//                8 < 11    true
//                9 < 11    true
//                10 < 11    true
//    2 *             11 < 11    false
//  2 X 1 = 2 
//  2 X 2 = 4
//  2 X 3 = 6
//  2 X 4 = 8
//  2 X 5 = 10 
//  and so on
// for(var i = 0;    i < 11;    i += 1){
//     // code execute // Write
//     console.log( * i)
// }

// 11 // 10
// 0
// 


// var name = prompt("Enter your number")

// console.log(name)









// let array = ["Kashan", "Adnan", 14, 39483754235345, 3499]


// let student = {
//     firstname: "Kashan",
//     lastname: "Adnan",
//     age: 14,
//     phone : 3472914253,
//     roll_no : 3499
// }



// keyword
// function






// document object model

// html 
// document


// console.log(document)


// let heading1 = document.getElementById("heading1")


// heading1.innerHTML = "Laptop"
// heading1.style.color = "red"
// heading1.style.backgroundColor = "yellow"




// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(xhttp.responseText)
//     }
// };
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
// xhttp.send();

// javascript own method/keyword/function .then .catch
fetch("https://jsonplaceholder.typicode.com/comments")
    .then((data) => {
        let data2 = data.json().then((data3) => {
            console.log(data3);

        }).catch((error2) => {
            console.log(error2);

        })
    })
    .catch((error) => {
        console.log(error)
    })











// 1) success (data backend se agaya) then
// 2) fail (netword problem, backend stopped, database disconnected) catch