# React App with Vite, Tailwind CSS, and JWT Authentication

This is a React application created using Vite as the tooling, and it incorporates Tailwind CSS for styling. The app runs on port 3000 and features a register/login system with JWT authentication. Upon successful login, the JWT token is stored in the local storage, and the user is routed to the product page.

## Getting Started

To get the project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install all the required dependencies.
4. Once the installation is complete, run `npm run dev` to start the development server.
5. Open your browser and visit `http://localhost:3000` to view the app.

## Dependencies

The project relies on the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern and fast development tool for building web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Features

### /register and /auth

The application includes a register and login system with JWT authentication. Users can create new accounts or log in with their existing credentials. Upon successful authentication, the JWT token is stored in the local storage for future API requests.

### Product List

After a successful login, the user is redirected to the product page, where they can view a list of products. The product list is fetched from an API, and the JWT token stored in the local storage is used for authentication.

## Styling

The application utilizes Tailwind CSS for styling. Tailwind CSS is a utility-first CSS framework that provides a set of low-level utility classes for building custom designs directly in your markup.
