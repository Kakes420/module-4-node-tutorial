# Module 4: Node.js Backend Tutorial

This project was completed as part of the SDEV255 course to demonstrate backend development using Node.js and Express.

## 🔧 Technologies Used

- Node.js
- Express
- HTML

## 📁 Project Structure

```
.
├── app.js               # Main Express server file
├── package.json         # Project metadata and dependencies
├── views/               # HTML files served as responses
│   ├── index.html
│   ├── about.html
│   └── 404.html
└── node_modules/        # Node.js dependencies
```

## 🚀 How to Run

1. Make sure Node.js is installed.
2. Clone the repository:
   ```bash
   git clone https://github.com/Kakes420/module-4-node-tutorial.git
   ```
3. Navigate to the project folder:
   ```bash
   cd module-4-node-tutorial
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the server:
   ```bash
   nodemon app.js
   ```
6. Open a browser and visit:
   ```
   http://localhost:3000
   ```

## 📄 Pages

- `/` → Home page
- `/about` → About page
- Any invalid route → 404 page

## ✅ Assignment Checklist

- [x] Used Express to handle routing
- [x] Served HTML files
- [x] Implemented 404 page and redirect
- [x] Committed to GitHub
