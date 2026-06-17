import React from "react";
import {
  FaTimes, FaHome, FaExclamationTriangle, FaClipboardList,
  FaBolt, FaRoute, FaPhoneAlt
} from "react-icons/fa";

export default function Sidebar({
  menuAberto,
  setMenuAberto,
  activeTab,
  navigateToTab,
  t
}) {
  return (
    <>
      {/* Sidebar Overlay */}
      {menuAberto && (
        <div
          className="overlay"
          onClick={() => setMenuAberto(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <aside className={`menu ${menuAberto ? "aberto" : ""}`}>
        <div className="menu-header">
          <div className="menu-title">
            <span className="logo-emoji">🐦</span>
            <span>Menu</span>
          </div>
          <button
            className="fechar-btn"
            onClick={() => setMenuAberto(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="menu-nav">
          <button
            className={`nav-link ${activeTab === "home" ? "active" : ""}`}
            onClick={() => navigateToTab("home")}
          >
            <FaHome className="nav-icon" /> {t.nav.home}
          </button>
          <button
            className={`nav-link ${activeTab === "rules" ? "active" : ""}`}
            onClick={() => navigateToTab("rules")}
          >
            <FaExclamationTriangle className="nav-icon" /> {t.nav.rules}
          </button>
          <button
            className={`nav-link ${activeTab === "accommodation" ? "active" : ""}`}
            onClick={() => navigateToTab("accommodation")}
          >
            <FaClipboardList className="nav-icon" /> {t.nav.accommodation}
          </button>
          <button
            className={`nav-link ${activeTab === "switches" ? "active" : ""}`}
            onClick={() => navigateToTab("switches")}
          >
            <FaBolt className="nav-icon" /> {t.nav.switches}
          </button>
          <button
            className={`nav-link ${activeTab === "guide" ? "active" : ""}`}
            onClick={() => navigateToTab("guide")}
          >
            <FaRoute className="nav-icon" /> {t.nav.guide}
          </button>
          <button
            className={`nav-link ${activeTab === "emergency" ? "active" : ""}`}
            onClick={() => navigateToTab("emergency")}
          >
            <FaPhoneAlt className="nav-icon" /> {t.nav.emergency}
          </button>
        </nav>

        <div className="menu-footer">
          <span>VistaLabs - 2026</span>
        </div>
      </aside>
    </>
  );
}
