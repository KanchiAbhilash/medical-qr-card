# Emergency Medical Card with QR Code

A web application that generates an emergency medical QR code containing critical patient information. In emergency situations, first responders can scan the QR code and instantly access essential medical details.

## Problem Statement

During emergencies, doctors and first responders often do not know a patient's:

* Blood Group
* Allergies
* Current Medications
* Medical Conditions
* Emergency Contact Information

This lack of information can delay treatment and lead to incorrect medical decisions.

## Solution

This application allows users to create a digital medical card and generate a QR code containing their medical information.

When the QR code is scanned:

* Essential medical information is displayed instantly
* Emergency contact information is available immediately
* No login is required for emergency access

## Features

* Medical Profile Creation
* QR Code Generation
* Emergency Information Access
* Responsive React Frontend
* Express.js Backend API
* Offline QR Data Storage
* Fast and Simple User Experience

## Tech Stack

### Frontend

* React
* TypeScript
* Axios
* Vite

### Backend

* Node.js
* Express.js
* QRCode Package

## Project Structure

```text
medical-qr-card/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── config/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/KanchiAbhilash/medical-qr-card.git
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## User Inputs

The application collects:

* Name
* Age
* Blood Group
* Emergency Contact Number
* Allergies
* Current Medications
* Medical Conditions
* Insurance Information (Optional)

## Application Flow

```text
User fills medical form
          ↓
Generate QR Code
          ↓
Backend creates QR
          ↓
QR displayed to user
          ↓
Emergency responder scans QR
          ↓
Medical information becomes available
```

## Future Enhancements

* AI Emergency Summary
* Emergency Contact Calling
* Medical Reports Upload
* Voice Read-Out Feature
* Hospital Alert System
* Downloadable Medical ID Card

## Author

**Kanchi Abhilash**

GitHub: https://github.com/KanchiAbhilash

## 📄 License

This project is developed for educational and buildathon purposes.
