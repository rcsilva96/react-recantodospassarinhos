import React from "react";
import { FaBars, FaGlobe, FaSun, FaMoon } from "react-icons/fa";

export default function Header({
  lang,
  setLang,
  darkMode,
  setDarkMode,
  setMenuAberto,
  navigateToTab,
  t
}) {
  return (
    <header className="header">
      <button
        className="menu-btn"
        onClick={() => setMenuAberto(true)}
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      <div className="header-logo-area" onClick={() => navigateToTab("home")}>
        <span className="logo-emoji">🐦</span>
        <h1>{t.title}</h1>
      </div>

      <div className="header-controls">
        {/* Language Selector */}
        <div className="lang-selector">
          <FaGlobe className="globe-icon" />
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="lang-select"
          >
            <option value="pt">🇧🇷</option>
            <option value="en">🇺🇸</option>
            <option value="es">🇪🇸</option>
          </select>
        </div>

        {/* Theme Toggle */}
        <button
          className="theme-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun className="sun" /> : <FaMoon className="moon" />}
        </button>
      </div>
    </header>
  );
}
