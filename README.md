# **Text Sentiment Analysis - Backend**

This is the **backend API** for the **Text Sentiment Analysis** project. It handles **user authentication**, **sentiment history storage**, and **sentiment analysis** via a **Flask ML API**.

---

## **Table of Contents**
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Steps to Set Up and Run the Project Locally](#steps-to-set-up-and-run-the-project-locally)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## **Features**
✅ User authentication (JWT-based login/signup).  
✅ Stores user sentiment analysis history.  
✅ Communicates with a Flask ML API for text analysis.  
✅ Role-based authentication (Admin/User).  
✅ Admin can view all users’ sentiment history.  

---

## **Technologies Used**
- **Node.js & Express.js** – Backend framework  
- **Flask & Machine Learning (Python)** – Sentiment analysis model  
- **MongoDB Atlas** – NoSQL cloud database  
- **Mongoose** – ODM for MongoDB  
- **JWT (JSON Web Tokens)** – Secure authentication  
- **Nodemailer** – Email notifications  

---

## **Project Structure**
📂 sentiment-analysis-project ├── 📂 backend │ ├── 📂 flask-api # Flask ML model & API │ │ ├── app.py # Flask API main file │ │ ├── model.pkl # Trained ML model │ │ ├── requirements.txt # Python dependencies │ │ ├── 📂 static # Static files (if any) │ │ ├── 📂 templates # HTML templates (if needed) │ │ │ ├── 📂 node-api # Express.js API │ │ ├── 📂 config # Database & JWT config │ │ ├── 📂 controllers # Business logic │ │ ├── 📂 models # MongoDB schemas │ │ ├── 📂 routes # API endpoints │ │ ├── 📂 middleware # Auth middleware │ │ ├── 📂 utils # Utility functions │ │ ├── .env # Environment variables │ │ ├── package.json # Node dependencies │ │ ├── server.js # API entry point │ │ │ ├── README.md # Backend documentation │ ├── .gitignore # Ignore unnecessary files

yaml
Copy

---

## **Setup and Installation**

### **Step 1: Clone the Repository**
```sh
git clone https://github.com/HTsandaruvan/sentiment-analysis-project.git
cd sentiment-analysis-project/backend
Step 2: Install Dependencies
sh
Copy
npm install
Step 3: Set Up Environment Variables
Create a .env file inside backend/ and configure it with your details:

env
Copy
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/sentiment_db?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
FLASK_API_URL=http://127.0.0.1:5001/predict
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
Step 4: Run the Backend Server
sh
Copy
npm start
The API will run at http://localhost:5000.

Steps to Set Up and Run the Project Locally
Step 1: Set Up MongoDB Atlas
Create an account on MongoDB Atlas.
Set up a new cluster and get the connection URI.
Add your MongoDB connection URI to the .env file.
Step 2: Install and Run Node.js API
Ensure Node.js is installed (node -v to check).
Navigate to the backend folder:
sh
Copy
cd sentiment-analysis-project/backend/node-api
Install dependencies:
sh
Copy
npm install
Start the server:
sh
Copy
npm start
API should run at http://localhost:5000.
Step 3: Install and Run Flask API
Ensure Python is installed (python --version to check).
Navigate to the Flask API folder:
sh
Copy
cd sentiment-analysis-project/backend/flask-api
Create a virtual environment:
sh
Copy
python -m venv venv
Activate the virtual environment:
sh
Copy
source venv/bin/activate   # On Windows: venv\Scripts\activate
Install dependencies:
sh
Copy
pip install -r requirements.txt
Run the Flask API:
sh
Copy
python app.py
Flask API should run at http://127.0.0.1:5001.
