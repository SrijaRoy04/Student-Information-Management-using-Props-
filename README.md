# Student Information Management Portal

A structured, responsive React application built with Vite demonstrating **unidirectional data flow and strict Props passing**.

---

## 🚀 Live Demo on GitHub Pages
- **URL**: [https://SrijaRoy04.github.io/Student-Information-Management-using-Props-/](https://SrijaRoy04.github.io/Student-Information-Management-using-Props-/)

---

## 🛠️ Technologies Used
- **React 18** - Functional components with Hooks (`useState`, `useMemo`)
- **Vite** - High-performance build tool and dev server
- **gh-pages** - One-click deployment to GitHub Pages
- **Modern CSS3** - Custom design system with CSS custom properties (variables)

---

## 🏗️ Architecture & Props Hierarchy

```text
[ App ] (Root State Container)
  │
  ├── Props: title, subtitle, totalStudents, averageCgpa, searchQuery, onSearchChange
  ▼
[ Header ]
  │
  ├── Props: students, sortOrder, onSortChange, selectedDept, onDeptChange, departments
  ▼
[ StudentList ]
  │
  ├── Props: name, rollNumber, department, semester, cgpa, photo, rank
  ▼
[ StudentCard ] (Displays student details & CGPA visual indicator)

  │
  └── Props: portalName, academicSession, totalRecords
  ▼
[ Footer ]
```

---

## 📁 Directory Structure

```text
├── public/                     # Static public assets
├── src/
│   ├── components/             # Child components receiving props
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── StudentCard.jsx
│   │   └── StudentList.jsx
│   ├── data/
│   │   └── studentsData.js     # Student records database
│   ├── App.css                 # Comprehensive portal styling
│   ├── App.jsx                 # Top-level state and container
│   └── main.jsx                # Application entry point
├── .gitignore                  # Git ignore rules (node_modules, dist)
├── index.html                  # HTML entry point with Google Fonts
├── package.json                # Project dependencies and deployment scripts
├── README.md                   # Documentation
└── vite.config.js              # Vite build and GitHub Pages base config
```

---

## 📋 Features

1. **Student Card Attributes via Props**:
   - `Name` (Full student name)
   - `Roll Number` (Unique university identifier)
   - `Department` (Major field of study)
   - `Semester` (Current academic level)
   - `CGPA` (Cumulative GPA with visual score bar & color-coded badge)
   - `Photo` (High-resolution avatar with automatic fallback)
2. **Mechanism to Sort Students by CGPA**:
   - **Highest First** (Descending: `b.cgpa - a.cgpa`)
   - **Lowest First** (Ascending: `a.cgpa - b.cgpa`)
   - **Reset / Default** (Preserves original registration order)
3. **Interactive Dashboard Controls**:
   - Live search by Name, Roll Number, or Department
   - Department quick filter chips
   - Cohort metric stats (Total Registered, Average CGPA, Active Term)
   - Empty state handling when no search matches

---

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open your browser at the URL shown in terminal (usually `http://localhost:5173/Student-Information-Management-using-Props-/`).

### 3. Build for Production
```bash
npm run build
```

### 4. Deploy to GitHub Pages
To deploy or update your GitHub Pages site automatically:
```bash
npm run deploy
```
*(This automatically runs `predeploy` to build the app and pushes the `dist` folder to the `gh-pages` branch on GitHub).*
