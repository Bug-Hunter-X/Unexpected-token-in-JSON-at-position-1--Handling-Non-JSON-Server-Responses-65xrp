# Unexpected token in JSON at position 1: Handling Non-JSON Server Responses

This repository demonstrates a common yet often confusing error in Node.js applications:  'Unexpected token in JSON at position 1'. This error typically arises when `JSON.parse()` encounters data that isn't valid JSON.  The root cause here is the server returning a plain text response instead of the expected JSON.

## Scenario

A Node.js server sends a simple text response ('Hello World!') instead of a structured JSON. The client attempts to parse this text as JSON, leading to the 'Unexpected token' error.

## Solution

The solution involves robust error handling to anticipate non-JSON responses from the server.  The code checks the `Content-Type` header to verify if the response is JSON and handles potential parsing errors gracefully.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js` to start the server.
4. Run `node bugSolution.js` to test the request.

The `bug.js` file demonstrates the problematic server behavior, while `bugSolution.js` shows the corrected client code that handles the unexpected text response.