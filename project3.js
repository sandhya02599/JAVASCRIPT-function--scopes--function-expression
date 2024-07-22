// Global scopes:


var apple = "green";
let blue = "red";
const banana = "yellow";

function fruit (){
    document.write(apple + "<br>")
    document.write(blue + "<br>")
    document.write(banana)
}
fruit()


// // function scopes:

var apple = "green";
let orange = "red";
const graps = "green";

function fruit(){
    var x = 100;
    let y = 200;
    const z = "sandhya"
    document.write(x + "<br>")
    document.write(y + "<br>")
    document.write(z)
}



// block scope:

function sports(){
    if(10 < 20){
        document.write("I like the Cricket")
    }
}
sports()


// Function Expression:


var a = function apple(){
    document.write("This is a green color" + "<br>")
}
a()

// Anonymous function:

 var b = function(){
    document.write("This is Anonymous function")
 }
 b()


//  parameters and return value:

var userName = prompt("Please enter your name")

function guest(myFriend){
    return document.write("Hello  world" + myFriend)
}
guest(userName)



