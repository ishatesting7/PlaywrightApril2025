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
        "firstname" : "James",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    }

    test('Update the Booking ID', async({request})=>{
    
        const authresponse = await request.post(
            `${baseURL}/auth`,
            {
            data:bodyData,
            headers:
            {
                'Content-Type':'application/json'
            },
            timeout:1000
            })
            const dataVa = await authresponse.json();
            console.log(dataVa)
            tok = dataVa.token;
            console.log(tok);
    
  
        const createresponse = await request.post(
            `${baseURL}/booking`,
            {
            data:createBookingRequest,
            headers:
            {
                'Content-Type':'application/json'
            }
            })
            const dataV = await createresponse.json();
            console.log(dataV)
            bookingId = dataV.bookingid;
            console.log(bookingId)
   

        const updateresponse = await request.put(
            `${baseURL}/booking/${bookingId}`,
            {
            data:updateBookingRequest,
            headers:
            {
                'Content-Type':'application/json',
                'Cookie':`token=${tok}`
            }
            })

            console.log(updateresponse.status())

           
        })
        test('Create Booking', async({request})=>{
    
            const authresponse = await request.post(
                `${baseURL}/auth`,
                {
                data:bodyData,
                headers:
                {
                    'Content-Type':'application/json'
                },
                timeout:1000
                })
                const dataVa = await authresponse.json();
                console.log(dataVa)
                tok = dataVa.token;
                console.log(tok);
        
      
            const createresponse = await request.post(
                `${baseURL}/booking`,
                {
                data:createBookingRequest,
                headers:
                {
                    'Content-Type':'application/json'
                }
                })
                const dataV = await createresponse.json();
                console.log(dataV)
                bookingId = dataV.bookingid;
                console.log(bookingId)
       
            })
            

})