# ServerPulse – Server Monitoring & Failure Prediction

<div align="center">
  <img src="./images/serverpulse.png" alt="ServerPulse Logo" width="550px" />
</div>

---

## Overview
ServerPulse is a comprehensive real-time server monitoring solution that combines live system metrics tracking with advanced failure prediction using **LSTM neural networks**.  
The application helps system administrators proactively manage server infrastructure by identifying potential failures before they occur.

---

## Features
- **Real-time Monitoring**: Track CPU, memory, disk usage, network activity, and other system metrics
- **Predictive Analytics**: ML-powered failure prediction using LSTM neural networks
- **Interactive Dashboard**: Modern React-based UI with responsive charts and metrics visualization
- **Trend Analysis**: Historical data tracking to identify patterns and anomalies
- **Alert System**: Visual warnings when metrics exceed normal thresholds
- **Responsive Design**: Works on desktop and mobile devices

---

## Application Screenshots

<img width="1780" height="653" alt="Dashboard" src="https://github.com/user-attachments/assets/03a560f5-89d4-42ca-bbf6-5e4681e3fc46" />
<img width="1799" height="746" alt="Analytics" src="https://github.com/user-attachments/assets/3e32bad4-e5b7-47ca-8c18-00bf4da5195a" />

---

## System Architecture
The application consists of three main components:

1. **React Frontend** – Built using React, Vite, and TailwindCSS  
2. **Flask Backend Server** – REST APIs for data handling and prediction  
3. **LSTM AI Model** – Neural network for predicting potential system failures  

---

## Technology Stack
- **Frontend**: React, Vite, TailwindCSS, Chart.js
- **Backend**: Python, Flask
- **AI / ML**: TensorFlow, LSTM Neural Networks
- **Data Collection**: psutil, custom system metrics

---

## Installation and Setup

### Prerequisites
- Python 3.7+
- Node.js 14+
- npm or yarn

## Backend setup
cd server
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py

## Frontend setup
cd ../client
npm install
npm run dev

## Access the Application

Frontend: http://localhost:5173

Backend API: http://localhost:5001

## Using the Application
## Dashboard Navigation

Status: View overall system health and stability probability

Parameters: Monitor individual system metrics and trends

Graphs: Visualize historical data

Analytics: Predictive insights and recommendations

<img width="1900" height="775" alt="Graphs" src="https://github.com/user-attachments/assets/95c0ba6b-e452-4887-b3be-6661276fc3fd" />


## Understanding the Prediction System

The LSTM neural network analyzes time-based patterns in system metrics to predict failures.

Prediction output includes:

Probability: Likelihood of failure

Reason: Key contributing metrics

Recommendations: Preventive actions

<img width="1879" height="775" alt="Prediction" src="https://github.com/user-attachments/assets/81bd1319-efdb-4d53-a9d9-22d1aa4d3900" />

Development and Integration
Training Custom Models
cd ai-model/training
python train_model.py


The trained model is saved in ai-model/models.

## Project Type

Academic Group Project – Personal GitHub Implementation

## Author

Suraj Pathan
Artificial Intelligence & Data Science
GitHub: https://github.com/grxsuraj
