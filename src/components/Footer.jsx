import React from 'react';

/**
 * Footer Component
 * Demonstrates props passing for metadata & system information:
 * @param {string} portalName
 * @param {string} academicYear
 * @param {number} totalRecords
 * @param {string} lastUpdated
 */
export default function Footer({
  portalName = "Student Information Portal",
  academicYear = "2024 - 2025",
  totalRecords = 0,
  lastUpdated = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}) {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h4>{portalName}</h4>
          <p className="footer-meta">
            Academic Session: <span>{academicYear}</span> • Active Database Records: <span>{totalRecords}</span>
          </p>
          <p className="footer-sub">
            Built strictly adhering to React Unidirectional Data Flow &amp; Props passing architecture.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-badge">
            <span className="live-indicator"></span>
            System Online • Last Sync: {lastUpdated}
          </div>
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} University Academic Affairs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
