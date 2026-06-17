import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaCompass, FaUtensils, FaUmbrellaBeach, FaShoppingBag, FaIcons } from "react-icons/fa";
import { localPoints } from "../data/translations";
import "./LocalGuide.css";

export default function LocalGuide({ lang, t }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter items based on category and search text
  const filteredPoints = localPoints.filter((point) => {
    const matchesCategory = activeCategory === "all" || point.category === activeCategory;
    const matchesSearch = point.name.toLowerCase().includes(search.toLowerCase()) || 
                          point.distance.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "beach": return <FaUmbrellaBeach />;
      case "food": return <FaUtensils />;
      case "leisure": return <FaCompass />;
      case "shopping": return <FaShoppingBag />;
      default: return <FaMapMarkerAlt />;
    }
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case "beach": return t.guide.categories.beach;
      case "food": return t.guide.categories.food;
      case "leisure": return t.guide.categories.leisure;
      case "shopping": return t.guide.categories.shopping;
      default: return category;
    }
  };

  return (
    <div className="guide-container">
      <div className="guide-header">
        <h3>{t.guide.title}</h3>
        <p>{t.guide.subtitle}</p>
      </div>

      <div className="guide-controls">
        {/* Search Bar */}
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder={t.guide.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Category Pills */}
        <div className="category-pills">
          {[
            { id: "all", label: t.guide.categories.all, icon: <FaIcons /> },
            { id: "beach", label: t.guide.categories.beach, icon: <FaUmbrellaBeach /> },
            { id: "food", label: t.guide.categories.food, icon: <FaUtensils /> },
            { id: "leisure", label: t.guide.categories.leisure, icon: <FaCompass /> },
            { id: "shopping", label: t.guide.categories.shopping, icon: <FaShoppingBag /> },
          ].map((cat) => (
            <button
              key={cat.id}
              className={`pill-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="pill-icon">{cat.icon}</span>
              <span className="pill-label">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Points of Interest List */}
      <div className="points-grid">
        {filteredPoints.length > 0 ? (
          filteredPoints.map((point, index) => (
            <div key={index} className="point-card">
              <div className="point-header">
                <span className={`category-tag ${point.category}`}>
                  {getCategoryIcon(point.category)}
                  {getCategoryLabel(point.category).replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, "").trim()}
                </span>
                <span className="distance-badge">{point.distance}</span>
              </div>
              <h4 className="point-name">{point.name}</h4>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(point.query)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="directions-link"
              >
                <FaMapMarkerAlt className="link-icon" />
                <span>{t.guide.directions}</span>
              </a>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>Nenhum resultado encontrado.</p>
          </div>
        )}
      </div>
    </div>
  );
}
