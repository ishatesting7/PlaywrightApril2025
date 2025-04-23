function checkVariable(demoValue)
{
    let demos = "103";

    console.log(typeof(demos));

    if(typeof demoValue === 'undefined' || demoValue === null)
    {
        console.log('It is undefined or null')
    }
    else
    {
        console.log('It is not undefined nor null')
    }
}

let variable;


checkVariable(1);
checkVariable(variable);
checkVariable(true);
checkVariable(null);
checkVariable("demo");