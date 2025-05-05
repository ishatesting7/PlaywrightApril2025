# Test info

- Name: 🌐 Full API Chaining - Restful Booker
- Location: /Users/vikasbhandari/Documents/PlaywrightClass/PlaywrightApril2025/tests/APITestCases/TC05NegativeTest.spec.js:5:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
    at /Users/vikasbhandari/Documents/PlaywrightClass/PlaywrightApril2025/tests/APITestCases/TC05NegativeTest.spec.js:41:35
```

# Test source

```ts
   1 | const { test, expect, request } = require('@playwright/test');
   2 |
   3 | const BASE_URL = 'https://restful-booker.herokuapp.com';
   4 |
   5 | test('🌐 Full API Chaining - Restful Booker', async ({ request }) => {
   6 |   let token;
   7 |   let bookingId;
   8 |
   9 |   // Step 1 - Auth
  10 |   const authResponse = await request.post(`${BASE_URL}/auth`, {
  11 |     headers: { 'Content-Type': 'application/json' },
  12 |     data: {
  13 |       username: 'admin',
  14 |       password: 'password123'
  15 |     }
  16 |   });
  17 |
  18 |   expect(authResponse.status()).toBe(200);
  19 |   const authBody = await authResponse.json();
  20 |   token = authBody.token;
  21 |   expect(token).toBeTruthy();
  22 |
  23 |   // Step 2 - Create Booking - 400 Bad Request
  24 |   const newBooking = {
  25 |     firstname: "",
  26 |     lastname: "Doe",
  27 |     totalprice: "123",
  28 |     depositpaid: true,
  29 |     bookingdates: {
  30 |       checkin: "2024-01-01",
  31 |       checkout: "2024-01-07"
  32 |     },
  33 |     additionalneeds: "Breakfast"
  34 |   };
  35 |
  36 |   const createResponse = await request.post(`${BASE_URL}/boking`, {
  37 |     headers: { 'Content-Type': 'application/json' },
  38 |     data: newBooking
  39 |   });
  40 |
> 41 |   expect(createResponse.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  42 |   const createBody = await createResponse.json();
  43 |   bookingId = createBody.bookingid;
  44 |   expect(bookingId).toBeGreaterThan(0);
  45 |
  46 | //   // Step 3 - Get Booking
  47 | //   const getResponse = await request.get(`${BASE_URL}/booking/${bookingId}`);
  48 | //   expect(getResponse.status()).toBe(200);
  49 | //   const getBody = await getResponse.json();
  50 | //   expect(getBody.firstname).toBe(newBooking.firstname);
  51 |
  52 | //   // Step 4 - Update Booking
  53 | //   const updatedBooking = {
  54 | //     ...newBooking,
  55 | //     firstname: "Jane",
  56 | //     additionalneeds: "Lunch"
  57 | //   };
  58 |
  59 | //   const updateResponse = await request.put(`${BASE_URL}/booking/${bookingId}`, {
  60 | //     headers: {
  61 | //       'Content-Type': 'application/json',
  62 | //       'Cookie': `token=${token}`
  63 | //     },
  64 | //     data: updatedBooking
  65 | //   });
  66 |
  67 | //   expect(updateResponse.status()).toBe(200);
  68 | //   const updateBody = await updateResponse.json();
  69 | //   expect(updateBody.firstname).toBe("Jane");
  70 |
  71 | //   // Step 5 - Delete Booking
  72 | //   const deleteResponse = await request.delete(`${BASE_URL}/booking/${bookingId}`, {
  73 | //     headers: {
  74 | //       'Cookie': `token=${token}`
  75 | //     }
  76 | //   });
  77 |
  78 | //   expect(deleteResponse.status()).toBe(201); // 201 means deleted
  79 |
  80 | //   // Step 6 - Confirm Deletion
  81 | //   const confirmDeleteResponse = await request.get(`${BASE_URL}/booking/${bookingId}`);
  82 | //   expect(confirmDeleteResponse.status()).toBe(404);
  83 | });  
```