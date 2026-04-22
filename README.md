# 🚗 Car Price Prediction System

A full-stack machine learning project that predicts car prices based on various features using multiple regression models.

---

## 📌 Project Overview

This system allows users to input car specifications and get an estimated price using trained ML models.

It includes:
- Machine Learning Models
- FastAPI Backend
- React (Vite) Frontend

---

## ⚙️ Tech Stack

- Python 🐍
- Scikit-learn
- FastAPI
- React (Vite)
- Tailwind CSS

---

## 🤖 Models Used

- Linear Regression
- Decision Tree
- Random Forest (Best Performance)

---

## 📊 Features Used

- Engine Size
- Horsepower
- Curb Weight
- Peak RPM
- City MPG
- Highway MPG

---

## 🚀 How It Works

Frontend → Backend API → ML Model → Prediction Output

---

## 🖥️ How to Run

### 🔹 Backend

```bash
cd Backend
pip install -r requirements.txt
uvicorn main:app --reload

cd Frontend
npm install
npm run dev
