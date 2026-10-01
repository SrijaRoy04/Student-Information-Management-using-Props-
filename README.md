# Student Information Management Portal

A structured, responsive React dashboard demonstrating **unidirectional data flow and strict Props passing**.

---

## 🏗️ Architecture & Props Hierarchy

```
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
  └── Props: portalName, academicSession, totalCount
  ▼
[ Footer ]
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
3. **Bonus Dashboard Capabilities**:
   - Live search by Name, Roll Number, or Department
   - Department quick filter chips
   - Cohort metric stats (Total Registered, Average CGPA, Active Term)
   - Empty state handling when no search matches

---

## 🚀 How to Run

### Method 1: Instant Browser Preview (Zero Installation)
Simply open [`index.html`](./index.html) directly in any web browser (Chrome, Edge, Firefox, Safari). It runs standalone using React 18 & Tailwind CSS via CDN.

### Method 2: Standard Vite Development Server
```bash
npm install
npm run dev
```
