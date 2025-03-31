# Node.js API with MongoDB

## Overview
This project is a simple Node.js API using Express and MongoDB. It provides a single GET endpoint to retrieve user data based on a user ID, with an additional requirement to return only users whose age is greater than 21.

## Features
- Connects to a MongoDB database using Mongoose
- GET endpoint at `/users/:id` to retrieve user details
- Validates MongoDB ObjectId
- Returns 404 if user is not found or age is 21 or below
- Handles errors gracefully

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-repo/node-mongodb-api.git
cd node-mongodb-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up your MongoDB connection in the `mongoose.connect` method within the `index.js` file.

4. Start the server:
```bash
npm start
```
The server will run on `http://localhost:3000`.

## API Usage

### Endpoint: `GET /users/:id`
- **Description:** Retrieve user details by user ID if age > 21.
- **Parameters:**
  - `id`: MongoDB ObjectId
- **Responses:**
  - `200 OK`: User data in JSON format
  - `400 Bad Request`: Invalid user ID
  - `404 Not Found`: User not found or age ≤ 21

#### Example Request:
```bash
GET http://localhost:3000/users/651c62b7e4b6a2a7a8f23d5c
```s

#### Example Response:
```json
{
  "_id": "651c62b7e4b6a2a7a8f23d5c",
  "name": "John Doe",
  "email": "johndoe@email.com",
  "age": 30
}
```

## Additional Notes
- Ensure MongoDB is running locally or use a remote MongoDB Atlas instance.
- Environment variables can be used for sensitive information like connection URIs.

## License
This project is licensed under the MIT License.

