# Chatisy Backend

This project is a backend implementation for user authentication and password reset functionality. The API is built with Node.js, Express, MongoDB, and Nodemailer.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository
2. Run `npm install` to install dependencies
4. Run `npm run start` to start the server

## Usage

This project provides endpoints for user signup, login, forgot password, and password update functionality. Users can create an account, log in with their credentials, and reset their password if necessary.

To use this API, make HTTP requests to the appropriate endpoints using a tool like Postman or a similar application.

## API Endpoints

- `POST /users/signup`: Create a new user account. Send a JSON object with the following fields in the request body:

```json
{
  "fullName": "james",
  "email": "jamesbond007@gmail.com",
  "password": "yourpassword",
  "profile": "image",
  "about": "bio"
}```


- `POST /users/login`: Log in to an existing user account. Send a JSON object with the following fields in the request body:
```json
{
  "email": "jamesbond007@gmail.com",
  "password": "yourpassword"
}```


- `POST /users/update`: Update unsers profile:
```json
{
  "email": "jamesbond007@gmail.com",
  "profile": "image",
  "about": "bio"
}```


- `GET /users/:name`: Get User's profile by name:
```json
{
  "email": "jamesbond007@gmail.com",
  "password": "newmission"
}```

## Technologies Used

This project uses the following technologies:

- Node.js
- Express
- MongoDB
- Mongoose
- Nodemailer
- JSON Web Tokens
- firebase

## Contributing

If you would like to contribute to this project, feel free to submit a pull request.

## License

This project is licensed under the Abhi Jain




