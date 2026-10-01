import React from 'react';

/**
 * StudentCard Component
 * Displays individual student details received strictly via Props:
 * @param {string} name - Student's full name
 * @param {string} rollNumber - Unique registration/roll number
 * @param {string} department - Academic department
 * @param {string} semester - Current semester
 * @param {number} cgpa - Cumulative Grade Point Average
 * @param {string} photo - URL of student's photo
 * @param {number} rank - Optional rank index passed from list
 */
export default function StudentCard({
  name,
  rollNumber,
  department,
  semester,
  cgpa,
  photo,
  rank
}) {
  // Determine Grade badge & color scheme based on CGPA
  const getCgpaStatus = (score) => {
    if (score >= 9.5) return { label: "Dean's Honor", colorClass: "badge-gold" };
    if (score >= 9.0) return { label: "Outstanding", colorClass: "badge-emerald" };
    if (score >= 8.0) return { label: "Distinction", colorClass: "badge-blue" };
    if (score >= 7.0) return { label: "First Class", colorClass: "badge-indigo" };
    return { label: "Satisfactory", colorClass: "badge-amber" };
  };

  const status = getCgpaStatus(cgpa);
  const cgpaPercentage = Math.min(100, Math.max(0, (cgpa / 10) * 100));

  return (
    <article className="student-card" aria-label={`Student card for ${name}`}>
      {/* Top Banner with Rank Badge (if provided) & Grade Standing */}
      <div className="card-top-bar">
        {rank !== undefined && (
          <span className="rank-badge" title="Rank based on current sorting">
            #{rank}
          </span>
        )}
        <span className={`status-badge ${status.colorClass}`}>
          {status.label}
        </span>
      </div>

      {/* Student Photo & Profile Header */}
      <div className="card-profile-header">
        <div className="avatar-wrapper">
          <img
            src={photo}
            alt={name}
            className="student-avatar"
            loading="lazy"
            onError={(e) => {
              // Graceful fallback to initial placeholder if image link is broken
              e.currentTarget.onerror = null;
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4f46e5&color=fff&size=160`;
            }}
          />
        </div>
        <div className="profile-titles">
          <h3 className="student-name" title={name}>{name}</h3>
          <p className="student-roll">
            <span className="roll-label">Roll No:</span> <strong>{rollNumber}</strong>
          </p>
        </div>
      </div>

      {/* Academic Details Section */}
      <div className="card-details-grid">
        <div className="detail-item">
          <span className="detail-label">Department</span>
          <span className="detail-value" title={department}>{department}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Semester</span>
          <span className="detail-value">{semester}</span>
        </div>
      </div>

      {/* CGPA Score Metric & Progress Bar */}
      <div className="cgpa-metric-box">
        <div className="cgpa-row">
          <span className="cgpa-title">Cumulative GPA (CGPA)</span>
          <span className="cgpa-number">
            <strong>{Number(cgpa).toFixed(2)}</strong> <span className="scale">/ 10.0</span>
          </span>
        </div>

        <div className="cgpa-progress-track">
          <div
            className={`cgpa-progress-bar ${status.colorClass}`}
            style={{ width: `${cgpaPercentage}%` }}
            role="progressbar"
            aria-valuenow={cgpa}
            aria-valuemin="0"
            aria-valuemax="10"
          ></div>
        </div>
      </div>
    </article>
  );
}
