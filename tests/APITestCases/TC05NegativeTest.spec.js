const { test, expect, request } = require('@playwright/test');

const BASE_URL = 'https://restful-booker.herokuapp.com';


test('Call', async ({request}) =>{


    const authResponse = await request.post('URL/tokenURL', {

        headers:{'Content-Type':'application/json',
                'Authorization':'Basic tokenValue'},
        data:{
            grandType:"clientCredentails"
        }

    })

    const tokenV = authResponse.body.accessToken;

// tokenV = Bearer asdmkasmdknasdnskandklnasklndksankldnsalknd
    const authResponse2 = await request.post(`${BASE_URL}/auth`, {
        headers: { 'Content-Type': 'application/json',
    'Authorization':`Bearer ${tokenV}`},
        data: {
          username: 'admin',
          password: 'password123'
        }
})
})

test('🌐 Full API Chaining - Restful Booker', async ({ request }) => {
  let token;
  let bookingId;

  // Step 1 - Auth
  const authResponse = await request.post(`${BASE_URL}/auth`, {
    headers: { 'Content-Type': 'application/json'},
    data: {
      username: 'admin',
      password: 'password123'
    }
  });

  expect(authResponse.status()).toBe(200);
  const authBody = await authResponse.json();
  token = authBody.token;
  expect(token).toBeTruthy();

  // Step 2 - Create Booking - 400 Bad Request
  const newBooking = {
    firstname: "",
    lastname: "Doe",
    totalprice: "123",
    depositpaid: true,
    bookingdates: {
      checkin: "2024-01-01",
      checkout: "2024-01-07"
    },
    additionalneeds: "Breakfast"
  };

  const createResponse = await request.post(`${BASE_URL}/booking`, {
    headers: { 'Content-Type': 'application/json' },
    data: newBooking
  });

  expect(createResponse.status()).toBe(200);
  const createBody = await createResponse.json();
  bookingId = createBody.bookingid;
  expect(bookingId).toBeGreaterThan(0);

//   // Step 3 - Get Booking
//   const getResponse = await request.get(`${BASE_URL}/booking/${bookingId}`);
//   expect(getResponse.status()).toBe(200);
//   const getBody = await getResponse.json();
//   expect(getBody.firstname).toBe(newBooking.firstname);

//   // Step 4 - Update Booking
//   const updatedBooking = {
//     ...newBooking,
//     firstname: "Jane",
//     additionalneeds: "Lunch"
//   };

//   const updateResponse = await request.put(`${BASE_URL}/booking/${bookingId}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'Cookie': `token=${token}`
//     },
//     data: updatedBooking
//   });

//   expect(updateResponse.status()).toBe(200);
//   const updateBody = await updateResponse.json();
//   expect(updateBody.firstname).toBe("Jane");

//   // Step 5 - Delete Booking
//   const deleteResponse = await request.delete(`${BASE_URL}/booking/${bookingId}`, {
//     headers: {
//       'Cookie': `token=${token}`
//     }
//   });

//   expect(deleteResponse.status()).toBe(201); // 201 means deleted

//   // Step 6 - Confirm Deletion
//   const confirmDeleteResponse = await request.get(`${BASE_URL}/booking/${bookingId}`);
//   expect(confirmDeleteResponse.status()).toBe(404);
});  