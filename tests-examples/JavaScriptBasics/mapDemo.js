const mapDemo = new Map();

mapDemo.set("demo","1")

mapDemo.set("demo1","2")

console.log(mapDemo.size);

console.log(mapDemo.get("demo"));

for(let [key1, value1] of mapDemo )
{
    console.log(`The Key is ${key1} and the value is ${value1}`)
}


/*

Store the value - Test Data
Store the Locator 


*/