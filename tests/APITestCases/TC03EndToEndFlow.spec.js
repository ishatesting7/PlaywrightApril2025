const {test, expect, request} = require('@playwright/test')

test.describe('Complete API Framework', ()=>{


    let bookingId;
    let tok;
    const baseURL = 'https://restful-booker.herokuapp.com';

    const bodyData = 
    {
        username : "admin",
        password : "password123"
    };

    const createBookingRequest = 
    {
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    }

    const updateBookingRequest = 
    {
        "firstname" : "Jimupdate",
        "lastname" : "Brownupdate"
    }

    test('Auth Token Generation', async({request})=>{
    
        const response = await request.post(
            `${baseURL}/auth`,
            {
            data:bodyData,
            headers:
            {
                'Content-Type':'application/json'
            },
            timeout:1000
            })
        const dataV = await response.json();
        console.log(dataV)
        tok = dataV.token;
        console.log(tok);
    
    })

    test('Create Booking', async({request})=>{
        

        const response = await request.post(
            `${baseURL}/booking`,
            {
            data:createBookingRequest,
            headers:
            {
                'Content-Type':'application/json'
            }
            })
            const dataV = await response.json();
            console.log(dataV)
            bookingId = dataV.bookingid;
            console.log(bookingId)
    })

    test('Update Booking', async({request})=>{
        

        const response = await request.put(
            `${baseURL}/booking/${bookingId}`,
            {
            data:updateBookingRequest,
            headers:
            {
                'Content-Type':'application/json',
                'Cookie':`token=${tok}`
            }
            })

            console.log(response.status())

           
            
    })
})