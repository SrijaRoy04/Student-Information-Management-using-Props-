import React from 'react';
import StudentCard from './StudentCard';

/**
 * StudentList Component
 * Receives:
 * @param {Array} students - List of student objects to render
 * @param {string} sortOrder - Current CGPA sort mode ('desc' | 'asc' | 'none')
 * @param {Function} onSortChange - Callback invoked when the user selects a sort mode
 * @param {string} selectedDept - Currently filtered department
 * @param {Function} onDeptChange - Department filter callback
 * @param {Array} departments - List of unique department names for quick filter
 */
export default function StudentList({
  students = [],
  sortOrder = 'none',
  onSortChange = () => {},
  selectedDept = 'All',
  onDeptChange = () => {},
  departments = []
}) {
  return (
    <section className="student-list-section">
      {/* Controls & Sorting Toolbar */}
      <div className="list-toolbar">
        <div className="toolbar-left">
          <h2 className="section-title">
            Student Profiles
            <span className="results-count">({students.length} found)</span>
          </h2>

          {/* Department Filter Chips */}
          <div className="filter-chips">
            <button
              className={`chip ${selectedDept === 'All' ? 'active' : ''}`}
              onClick={() => onDeptChange('All')}
            >
              All Departments
            </button>
            {departments.map((dept) => (
              <button
                key={dept}
                className={`chip ${selectedDept === dept ? 'active' : ''}`}
                onClick={() => onDeptChange(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* CGPA Sorting Mechanism (Requested Feature) */}
        <div className="toolbar-right">
          <label htmlFor="cgpa-sort" className="sort-label">
            Sort by CGPA:
          </label>
          <div className="sort-button-group" id="cgpa-sort">
            <button
              className={`sort-btn ${sortOrder === 'desc' ? 'active' : ''}`}
              onClick={() => onSortChange('desc')}
              title="Sort Highest CGPA to Lowest"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
              High to Low
            </button>

            <button
              className={`sort-btn ${sortOrder === 'asc' ? 'active' : ''}`}
              onClick={() => onSortChange('asc')}
              title="Sort Lowest CGPA to Highest"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
              Low to High
            </button>

            {sortOrder !== 'none' && (
              <button
                className="sort-btn reset-btn"
                onClick={() => onSortChange('none')}
                title="Reset to Default Order"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Student Cards Grid */}
      {students.length > 0 ? (
        <div className="students-grid">
          {students.map((student, index) => (
            <StudentCard
              key={student.id || student.rollNumber}
              rank={sortOrder === 'desc' ? index + 1 : undefined}
              name={student.name}
              rollNumber={student.rollNumber}
              department={student.department}
              semester={student.semester}
              cgpa={student.cgpa}
              photo={student.photo}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No Student Records Found</h3>
          <p>Try adjusting your search query, department filter, or resetting the sort order.</p>
          <button
            className="reset-filters-btn"
            onClick={() => {
              onDeptChange('All');
              onSortChange('none');
            }}
          >
            Clear All Filters
          </button>
        </div>
      )}
    </section>
  );
}
