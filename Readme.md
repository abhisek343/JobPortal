# Job Portal

A full-stack job portal application built with the MERN stack (MongoDB, Express.js, React, Node.js) and incorporating GraphQL for API interactions.

## Features

- User authentication (signup/login)
- Job posting and searching
- Application management
- Company profiles
- Admin dashboard

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Redux Toolkit
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **API:** RESTful API, GraphQL endpoint (planned/in progress)
- **Authentication:** JWT

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/abhisek343/JobPortal.git
    cd JobPortal
    ```
2.  **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    # Create a .env file based on .env.example and add your MongoDB URI, JWT secret, etc.
    cd ..
    ```
3.  **Install frontend dependencies:**
    ```bash
    cd frontend
    npm install
    # Create a .env file if needed for environment variables
    cd ..
    ```

## Usage

1.  **Start the backend server:**
    ```bash
    cd backend
    npm start # Or npm run dev for development mode
    ```
2.  **Start the frontend development server:**
    ```bash
    cd frontend
    npm run dev
    ```
3.  Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173`).
