// A = {1,2,3}
// B = {2,3,4}

// AUB -> {1,2,3,4}


//Union 

function union(x, y)
{
    let unionSet = new Set(x)

    for(let i of y)
    {
        unionSet.add(i);  
    }
    return unionSet;
}
let i = 10;

const varA = new Set(['Red','Orange','Black']);
const varB = new Set(['Pink','Orange','Yellow', "Indigo"]);

const resultValue = union(varA,varB);

console.log(resultValue);

//Intersection
function intersection(x, y)
{
    let intersectionSet = new Set();

    for(let i of y)
    {
        if(x.has(i))
        {
            intersectionSet.add(i);
        }
    }

    return intersectionSet;

}

const varC = new Set(['Red','Orange','Black',"Yellow"]);
const varD = new Set(['Pink','Orange','Yellow']);

const result1 = intersection(varC, varD);

console.log(result1);

//Difference
function difference(x, y)
{
    let differenceSet = new Set(y);

    for(let i of x)
    {
            differenceSet.delete(i);
    }

    return differenceSet;

}
const varE = new Set(['Red','Orange','Black',"Yellow", "Pink"]);
const varF = new Set(['Pink','Orange','Yellow']);

const result2 = difference(varE, varF);

console.log(result2);


//Subset Logic

function subset(x, y)
{
    for(let i of y)
    {
        if(!x.has(i))
        {
           return false
        }
    }

    return true
}

const varG = new Set(['Red','Orange','Black',"Yellow","Pink"]);
const varH = new Set(['Pink','Orange']);

const res = subset(varG, varH)
console.log(res);