const request = require('supertest'); // Import supertest for HTTP assertions
const app = require('../src/app'); // Import the Express app

describe('User Registration', () => {
  it('should register a user and send OTP', async () => {
    const res = await request(app).post('/graphql') // Send a POST request to the GraphQL endpoint
      .send({
        query: `mutation {
          register(email: "testuser@example.com", password: "Password123!") 
        }`
      });
    expect(res.body.data).toHaveProperty('register'); // Check if the response has the 'register' property
  });
});

