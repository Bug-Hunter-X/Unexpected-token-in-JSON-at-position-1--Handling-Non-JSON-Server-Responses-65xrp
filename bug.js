const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error: Unexpected token in JSON at position 1
//This error can occur if you're trying to parse a JSON response that isn't valid JSON.  Common causes include missing quotes, mismatched brackets, or incorrect escaping of characters.  This example demonstrates an attempt to parse a non-JSON response, such as a text response from the server.

const request = require('request');

request('http://localhost:3000', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // Attempt to parse the response body as JSON
    try {
      const data = JSON.parse(body); //Error happens here if response is not valid JSON
      console.log('Data:', data);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  } else {
    console.error('Request error:', error);
  }
});