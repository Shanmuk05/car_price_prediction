# Car Price Prediction - Quick Start Guide

## Prerequisites
- Python 3.8+ installed
- Node.js & npm installed

---

## Step 1: Train ML Models (One-time setup)

**From the project root directory:**

```bash
cd Backend
python -m ml.train
```

**Expected Output:**
```
✅ Linear Regression: MAE=1344.92, R²=0.9075
✅ Decision Tree: MAE=1718.56, R²=0.8365
✅ Random Forest: MAE=1127.61, R²=0.9247
Models saved successfully!
```

---

## Step 2: Start the Backend API Server

**Open a new terminal and run:**

```bash
cd Backend
python -m uvicorn main:app --reload --port 8000
```

**Expected Output:**
```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Application startup complete.
```

✅ **Backend is ready at:** http://localhost:8000

---

## Step 3: Start the Frontend Dev Server

**Open another new terminal and run:**

```bash
cd Frontend
npm install    # Only needed first time
npm run dev
```

**Expected Output:**
```
VITE v5.4.21 ready in 1662 ms
➜  Local:   http://localhost:8080/
```

✅ **Frontend is ready at:** http://localhost:8080

---

## Step 4: Access the Application

### Option A: Web Interface (Recommended)
1. Open your browser
2. Go to **http://localhost:8080**
3. Fill in car specifications and click "Predict"
4. View accuracy metrics on the dashboard

### Option B: API Documentation (Testing)
1. Go to **http://localhost:8000/docs**
2. Try the endpoints:
   - **POST /predict** - Predict car prices
   - **GET /accuracy** - View model performance

---

## File Structure to Show

```
Car_Price_Prediction/
├── Backend/
│   ├── main.py              ← FastAPI server
│   ├── ml/
│   │   ├── train.py         ← Model training
│   │   ├── predict.py       ← Predictions
│   │   └── accuracy.py      ← Model accuracy
│   ├── routes/
│   │   ├── user_predict.py  ← /predict endpoint
│   │   └── model_accuracy.py ← /accuracy endpoint
│   └── dataset/
│       └── Automobile_data.csv
│
├── Frontend/
│   ├── src/
│   │   ├── App.tsx          ← Main app component
│   │   ├── components/
│   │   │   ├── PredictionForm.tsx
│   │   │   ├── PredictionResults.tsx
│   │   │   └── AccuracyDashboard.tsx
│   │   └── lib/
│   │       └── api.ts       ← API calls
│   └── package.json
│
└── CarPricePrediction(*.ipynb) ← Jupyter notebooks for analysis
```

---

## How It Works

### 🔄 Data Flow

```
User Input (Frontend)
        ↓
React Form Component
        ↓
HTTP POST to http://localhost:8000/predict
        ↓
FastAPI Backend (main.py)
        ↓
ML Model (Random Forest/Decision Tree/Linear Regression)
        ↓
JSON Response with Price Prediction
        ↓
Display Results (Frontend)
```

---

## Testing the Application

### Test 1: Predict Car Price
1. Fill the form with car specifications
2. Click "Predict"
3. See the predicted price from all 3 models

### Test 2: View Model Accuracy
1. Go to "Accuracy Dashboard" tab
2. See performance metrics:
   - Mean Absolute Error (MAE)
   - R² Score
   - Mean Squared Error (MSE)

### Test 3: Direct API Call
```bash
curl -X POST "http://localhost:8000/predict" \
  -H "Content-Type: application/json" \
  -d '{
    "symboling": 3,
    "normalized-losses": 122,
    "make": "alfa-romero",
    "fuel-type": "gas",
    ...
  }'
```

---

## Troubleshooting

### Backend won't start
```
ERROR: Could not import module "main"
```
**Solution:** Make sure you're in the `Backend` directory when running uvicorn

### Frontend won't connect to Backend
- Check Backend is running on http://localhost:8000
- Check Frontend `.env` file or [api.ts](Frontend/src/lib/api.ts)
- Look for CORS errors in browser console

### Port already in use
```bash
# Backend port 8000
netstat -ano | findstr :8000  # Check what's using it
# Then use: --port 8001

# Frontend port 8080
netstat -ano | findstr :8080
```

---

## Key Technologies

- **Backend:** FastAPI, scikit-learn, pandas, numpy
- **Frontend:** React, TypeScript, Vite, TailwindCSS, Recharts
- **ML Models:** Random Forest, Decision Tree, Linear Regression
- **Dataset:** UCI Automobile Dataset

---

## Next Steps

1. ✅ Models trained
2. ✅ Backend running
3. ✅ Frontend running
4. 🎯 **Test predictions**
5. 🎯 **Show accuracy metrics**
6. 🎯 **Demonstrate to others**

**Everything is ready to demo!** 🚀
