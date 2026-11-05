import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';
import Footer from './components/Footer';
import { STUDENTS_DATA } from './data/studentsData';
import './App.css';

/**
 * App Component (Root Container)
 * 
 * Demonstrates:
 * 1. Managing state at the top level
 * 2. Sorting mechanism by CGPA (Ascending, Descending, Default)
 * 3. Search and Department Filtering
 * 4. Passing all data and callback handlers DOWN through PROPS to child components:
 *    - App -> Header (title, stats, search state & handler)
 *    - App -> StudentList (students list, sort order, sort callback, department filters)
 *    - StudentList -> StudentCard (individual student fields: name, rollNumber, department, semester, cgpa, photo)
 *    - App -> Footer (portal metadata, total records count)
 */
export default function App() {
  // Primary raw data state
  const [students] = useState(STUDENTS_DATA);

  // Sorting state: 'none' | 'desc' (Highest first) | 'asc' (Lowest first)
  const [sortOrder, setSortOrder] = useState('none');

  // Search query & department filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  // Extract unique departments for filter navigation
  const departments = useMemo(() => {
    const depts = new Set(students.map((s) => s.department));
    return Array.from(depts);
  }, [students]);

  // Compute filtered & sorted students based on active props/state
  const processedStudents = useMemo(() => {
    let result = [...students];

    // 1. Filter by Department
    if (selectedDept !== 'All') {
      result = result.filter((s) => s.department === selectedDept);
    }

    // 2. Filter by Search Query (Name, Roll No, or Department)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.rollNumber.toLowerCase().includes(q) ||
          s.department.toLowerCase().includes(q)
      );
    }

    // 3. Sort mechanism by CGPA
    if (sortOrder === 'desc') {
      // Highest CGPA to Lowest
      result.sort((a, b) => b.cgpa - a.cgpa);
    } else if (sortOrder === 'asc') {
      // Lowest CGPA to Highest
      result.sort((a, b) => a.cgpa - b.cgpa);
    }

    return result;
  }, [students, sortOrder, searchQuery, selectedDept]);

  // Compute summary stats to pass to Header/Footer via props
  const averageCgpa = useMemo(() => {
    if (students.length === 0) return 0;
    const total = students.reduce((acc, curr) => acc + curr.cgpa, 0);
    return total / students.length;
  }, [students]);

  return (
    <div className="portal-app">
      {/* 1. Header Component with Props */}
      <Header
        title="Student Information Management Portal"
        subtitle="Centralized Academic Performance & Verification Hub"
        totalStudents={students.length}
        averageCgpa={averageCgpa}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Container */}
      <main className="portal-main-content">
        {/* 2. Student List Component with Props */}
        <StudentList
          students={processedStudents}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          selectedDept={selectedDept}
          onDeptChange={setSelectedDept}
          departments={departments}
        />
      </main>

      {/* 3. Footer Component with Props */}
      <Footer
        portalName="SimsPortal™ Academic Systems"
        academicYear="2024 - 2025"
        totalRecords={students.length}
      />
    </div>
  );
}
