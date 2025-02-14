# **Text Sentiment Analysis - Backend**

This is the **backend API** for the **Text Sentiment Analysis** project. It handles **user authentication**, **sentiment history storage**, and **sentiment analysis** via a **Flask ML API**.

---

## **Table of Contents**
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Steps to Set Up and Run the Project Locally](#steps-to-set-up-and-run-the-project-locally)

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

text-sentiment-analysis-backend/
│── flask-api/  (Sentiment analysis model)
│── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   │── app.js
|   |── server.js
│── .env
│── .gitignore
│── package.json

## **Setup and Installation**

### **Step 1: Clone the Repository**

```sh
git clone https://github.com/HTsandaruvan/sentiment-analysis-project.git
cd sentiment-analysis-project/backend
```

### Step 2: Install Dependencies

```sh
npm instal
```
### Step 3: Set Up Environment Variables
Create a .env file inside backend/ and configure it with your details:

```sh
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/sentiment_db?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
FLASK_API_URL=http://127.0.0.1:5001/predict
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password

```
### Step 4: Set Up MongoDB Atlas
 1. Create an account on MongoDB Atlas.
 2. Set up a new cluster and get the connection URI.
 3. Add your MongoDB connection URI to the .env file.

Ensure Node.js is installed (node -v to check).
### Step 5: Run the Backend Server

```sh
nodemon src/server.js

```

The API will run at http://localhost:5000.

### Step 6: Install and Run Flask API
Ensure Python is installed (python --version to check).

Navigate to the Flask API folder:

```sh

cd flask-api

```
Create a virtual environment:

```sh
python -m venv venv

```

Activate a virtual environment:

```sh
source venv/bin/activate   # On Windows: venv\Scripts\activate

```

Install dependencies:

```sh
pip install -r requirements.txt

```

Run the Flask API:

```sh
python app.py

```

Flask API should run at http://127.0.0.1:5001.
