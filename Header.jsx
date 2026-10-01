import React from 'react';

/**
 * Header Component
 * Demonstrates receiving props: title, subtitle, totalStudents, averageCgpa, searchQuery, onSearchChange
 */
export default function Header({
  title = "Student Information Portal",
  subtitle = "Academic Performance & Student Profile Directory",
  totalStudents = 0,
  averageCgpa = 0,
  searchQuery = "",
  onSearchChange = () => {}
}) {
  return (
    <header className="header-container">
      {/* Top Banner */}
      <div className="header-top">
        <div className="portal-branding">
          <div className="portal-logo-badge">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div>
            <h1 className="portal-title">{title}</h1>
            <p className="portal-subtitle">{subtitle}</p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="header-search-wrapper">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search by name, roll no, department..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => onSearchChange("")} title="Clear search">
              ✕
            </button>
          )}
        </div>
      </div>

      {/* KPI Stats Bar passed via Props */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <span className="kpi-label">Total Registered</span>
          <span className="kpi-value">{totalStudents}</span>
          <span className="kpi-sub">Enrolled Students</span>
        </div>
        <div className="kpi-card highlight">
          <span className="kpi-label">Cohort Avg CGPA</span>
          <span className="kpi-value">{averageCgpa.toFixed(2)}</span>
          <span className="kpi-sub">Scale of 10.00</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-label">Active Academic Year</span>
          <span className="kpi-value">2024-2025</span>
          <span className="kpi-sub">Fall Semester</span>
        </div>
        <div className="kpi-card">
          <span className="kpi-label">Grading System</span>
          <span className="kpi-value">10-Point</span>
          <span className="kpi-sub">Absolute Grading</span>
        </div>
      </div>
    </header>
  );
}
