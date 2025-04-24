function twoDimensionDemo(arrx, arry)
{

    let arr = []
    for(let i = 0; i< arrx; i++)
    {
        for(let j = 0; j< arry; j++)
        {
             arr[i] = [];
        }
    }

  

    //Inserting the value
    for(let i = 0; i< arrx; i++)
    {
        for(let j = 0; j< arry; j++)
        {
             arr[i][j] = "demo";
        }
    }

    return arr;
}



const dem1 = 2;
const dem2 = 3;

const res = twoDimensionDemo(dem1,dem2)

console.log(res);

// MATRIX - 2 ROW 3 COLUMN