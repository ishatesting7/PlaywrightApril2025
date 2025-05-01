const {test, expect, request} = require('@playwright/test')

const baseURL = 'https://petstore.swagger.io/v2';

test.describe('POST API Call', ()=>{

    const invalidBodyDemo = {
        validPet:true
    }
    const validPetBody = 
    {
        id: Date.now(),
        category: {
          id: 0,
          name: "Tommy"
        },
        name: "doggie",
        photoUrls: [
          "Tommy"
        ],
        tags: [
          {
            id: Date.now(),
            name: "Tommy"
          }
        ],
        status: "available"
      }

    
    test('Should Create a new Record', async({request})=>{

        const response = await request.post(`${baseURL}/pet`,{
            data:validPetBody
        })

        expect(response.status()).toBe(200);
        const bodyValue = await response.json();
        console.log(bodyValue);

    })

    test('Should Show 400 Bad Request', async({request})=>{

        const response = await request.post(`${baseURL}/pet`,{
            data:invalidBodyDemo
        })

        expect(response.status()).toBe(200);
        const bodyValue = await response.json();
        console.log(bodyValue);

    })

    test('Get Pet By ID', async({request})=>{

        const response = await request.get(`${baseURL}/pet/0`)

        
        expect(response.status()).toBe(404);
        

    })

})