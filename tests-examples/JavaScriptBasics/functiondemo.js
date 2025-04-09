function nameOfFunction(name)
{

    console.log(name)
    return "Hello I am new to Playwright";

}

nameOfFunction("hello");

let message = nameOfFunction("APK")

console.log(message);

//normal function
function demo2(parameter1, parameter2)
{
    console.log(parameter1)
    console.log(parameter2)

}
demo2(1,2)
demo2("Hello","Hello2")
demo2("","Hello2","Herllo55")
//callback 

const demo = (parameter3) =>{

    return `Hello, ${parameter3} ${message}`;

}

console.log(demo("Demo4"))