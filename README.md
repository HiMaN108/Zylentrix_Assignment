# Backend Developer Intern Assignment

## Overview
Develop a RESTful API that provides basic CRUD (Create, Read, Update, Delete) operations for managing users.

## Functionalities
1. **Create a User** – Accepts name, email, and age, then stores them in a database.
2. **Retrieve All Users** – Returns a list of users.
3. **Retrieve a Single User** – Fetches a user by ID.
4. **Update a User** – Updates user details using an ID.
5. **Delete a User** – Removes a user from the database using an ID.

## Documentation About the Source Code

### Tech Stack
This project is built using the following technologies:
- **Node.js**
- **Express.js**
- **Body-parser**
- **Mongoose** (Cloud MongoDB - MongoDB Atlas)

### Steps Involved
1. **Initialize the project** using `npm init`.
2. The entry point for the project is **`server.js`**.
3. **Install dependencies** using:
   ```sh
   npm install express mongoose dotenv body-parser nodemon
   ```
4. **Set up environment variables**:
   - Create a `.env` file.
   - Store `PORT` and `MONGODB_URI` (MongoDB Atlas connection string).
5. **Database Connection**:
   - Implement database connection logic in `/config/database.js`.
6. **Define User Schema**:
   - Create a `User` schema in `/models/user.js`.
7. **Implement Routes**:
   - Develop routes for CRUD functionalities:
     - **Create a user**
     - **Retrieve all users**
     - **Retrieve a single user by ID**
     - **Update a user**
     - **Delete a user**

## Running the Application
1. **Start the server** in development mode using:
   ```sh
   npm run start
   ```


## Testing with Postman API
Once the server is running, we can test the API endpoints using Postman. Here's a quick overview of the available endpoints:

POST /api/users Register a new user.
GET /api/users  Get the all users
PUT /api/users/:id  fetching the single user from user ID
DELTE /api/users/:id deleting the single user form user ID