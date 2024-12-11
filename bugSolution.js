const request = require('request');

request('http://localhost:3000', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // Check the Content-Type header to ensure a JSON response
    if (response.headers['content-type'] === 'application/json') {
      try {
        const data = JSON.parse(body);
        console.log('Data:', data);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    } else {
      console.log('Response is not JSON:', body);
    }
  } else {
    console.error('Request error:', error);
  }
});