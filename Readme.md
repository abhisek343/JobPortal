#  JobPortal 🚀

## Description 📝

JobPortal is a full-stack web application designed to connect job seekers with recruiters. It provides a platform for users to register either as students (job seekers) or recruiters. Students can browse job listings, apply for jobs, and manage their profiles. Recruiters can post job openings, manage company profiles, and review applications.

## Features ✨

### Frontend (Built with React & Vite) ⚛️

* **User Authentication:** Secure login and signup for both students and recruiters.
* **Job Browse & Searching:** Students can browse all available jobs and search based on keywords.
* **Job Filtering:** Filter jobs based on location, industry (role), and salary range.
* **Job Details:** View detailed descriptions of job postings.
* **Job Application:** Students can apply for jobs directly through the platform.
* **Profile Management:** Users can view and update their profiles, including bio, skills, and resume.
* **Applied Jobs Tracking:** Students can see a list of jobs they have applied for and their status.
* **Category Carousel:** Quickly browse jobs by popular categories.
* **Admin/Recruiter Panel:**
    * Manage company profiles (create, view, update).
    * Post new job openings.
    * View and manage posted jobs.
    * View applicants for specific jobs.
    * Update applicant status (Accepted/Rejected).
* **Protected Routes:** Secure admin sections accessible only to recruiters.
* **Responsive UI:** Built with Shadcn UI components and Tailwind CSS for a modern look and feel.
* **State Management:** Uses Redux Toolkit for efficient state management across the application.
* **Notifications:** User feedback via toast notifications using Sonner.

### Backend (Built with Node.js & Express) ⚙️

* **RESTful API:** Provides endpoints for user management, company management, job postings, and applications.
* **User Authentication & Authorization:** Uses JWT (JSON Web Tokens) for secure authentication and middleware to protect routes.
* **Password Hashing:** Uses bcryptjs for secure password storage.
* **Database:** MongoDB with Mongoose ODM for data modeling and interaction.
* **File Uploads:** Handles file uploads (resumes, profile pictures, logos) using Multer and Cloudinary for cloud storage.
* **Data URI Conversion:** Converts file buffers for Cloudinary upload.
* **CORS & Cookie Handling:** Configured for handling cross-origin requests and cookies.
* **Environment Variables:** Uses dotenv for managing environment configurations.
* **MVC Architecture:** Organizes code into Models, Views (handled by Frontend), and Controllers.

## Technologies Used 💻

### Frontend

* **Framework/Library:** React.js
* **Build Tool:** Vite
* **Styling:** Tailwind CSS, CSS
* **UI Components:** Shadcn UI (@radix-ui/react-\*)
* **State Management:** Redux Toolkit, Redux Persist
* **Routing:** React Router DOM
* **HTTP Client:** Axios
* **Animation:** Framer Motion
* **Linting:** ESLint
* **Utilities:** clsx, tailwind-merge, Lucide Icons

### Backend

* **Framework:** Express.js
* **Language:** Node.js
* **Database:** MongoDB, Mongoose
* **Authentication:** JWT (jsonwebtoken), bcryptjs
* **File Storage:** Cloudinary
* **Middleware:** CORS, Cookie Parser, Multer
* **Environment Variables:** dotenv
* **Data URI:** datauri

## Getting Started (Conceptual) 🏁

(Based on typical MERN stack project structure)

1.  **Clone the repository.**
2.  **Backend Setup:**
    * Navigate to the `backend` directory.
    * Install dependencies: `npm install`
    * Create a `.env` file based on environment variables used in `index.js`, `db.js`, `cloudinary.js`, `isAuthenticated.js`. (e.g., `PORT`, `MONGO_URI`, `SECRET_KEY`, `CLOUD_NAME`, `API_KEY`, `API_SECRET`).
    * Start the server: `npm run dev` (uses nodemon).
3.  **Frontend Setup:**
    * Navigate to the `frontend` directory.
    * Install dependencies: `npm install`
    * Ensure the API endpoints in `src/utils/constant.js` point to the correct backend URL.
    * Start the development server: `npm run dev`
4.  **Access the application** in your browser (likely `http://localhost:5173` based on backend CORS config).