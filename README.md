# Job Application Tracker

A web application to help users track their job applications efficiently. Manage applications, update statuses, and stay organized in your job search journey.

## Features

- Add, edit, and delete job applications.
- Track application status (Applied, Interview, Offer, Rejected, etc.).
- Filter applications by company, position, or status.
- Dashboard with an overview of applications.
- Dark mode for better readability.
- Responsive design for mobile and desktop.

## Technologies Used

- **Frontend:** React.js, Bootstrap 4
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Other Libraries:** Axios, dotenv, CORS



## Installation

### Prerequisites

- Node.js & npm
- MySQL
- Git (optional)

### Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
Install dependencies:

npm install


Create a .env file in the backend folder:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=job_tracker
PORT=5000


Run the backend server:

node server.js


The backend should now be running on http://localhost:5000.

Frontend Setup

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the frontend server:

npm start


The frontend should now be running on http://localhost:3000.

Usage

Open the frontend in your browser.

Add your job applications using the "Add Job" form.

Track and update the status of each application.

Future Enhancements

Email notifications for upcoming interviews.

Analytics to track application success rates.

User authentication and multi-user support.

Dark/Light mode toggle.
