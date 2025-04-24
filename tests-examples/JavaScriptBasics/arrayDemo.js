function arrayDemo()
{
    let arrayValue = [1,932,23223,323];

    let arrayValue1= ["1",932,23223,true];
    
    arrayValue.splice(1,2,10);

    let array1 = arrayValue.concat(arrayValue1)
    
    console.log(array1)

    for( let i = 0; i<array1.length;i++)
    {
        console.log(array1[i]);
    }   
}

arrayDemo();

console.log("==========");

function randomValueFromArray(arrDemo)
{

    const var1 = Math.floor(Math.random()*arrDemo.length);
    const itemValue = arrDemo[var1];
    return itemValue;
}

const arrayValue = [true, "Demo", 232, "Demo2", "03039", 383,44324];

const resultValue = randomValueFromArray(arrayValue);

console.log(resultValue);