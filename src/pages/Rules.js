import React from "react";
import { 
  FaUsers, FaPaw, FaSmoking, FaUserTimes, FaChild, 
  FaGlassCheers, FaVolumeMute, FaSnowflake, FaSuitcase, 
  FaBed, FaDoorOpen, FaExclamationTriangle 
} from "react-icons/fa";

export default function Rules({ t }) {
  // Helper to map rules to appropriate icons
  const getRuleIcon = (index) => {
    const icons = [
      <FaUsers />,                                  // Max capacity
      <FaPaw className="red-icon" />,              // Pets
      <FaSmoking className="red-icon" />,          // Smoking
      <FaUserTimes className="red-icon" />,        // Visitors
      <FaChild className="red-icon" />,            // Children under 13
      <FaGlassCheers className="red-icon" />,       // Parties
      <FaBed className="orange-icon" />,            // Bed linen
      <FaDoorOpen className="orange-icon" />,       // Beach service (or umbrella)
      <FaVolumeMute className="red-icon" />,       // Quiet hours
      <FaSnowflake className="blue-icon" />,       // Fridges
      <FaSuitcase className="orange-icon" />        // Belongings
    ];
    return icons[index] || <FaExclamationTriangle />;
  };

  return (
    <div className="tab-content">
      <section className="card rules-card">
        <h2>{t.rules.title}</h2>
        <div className="rules-grid">
          {t.rules.list.map((rule, index) => (
            <div key={index} className="rule-item">
              <div className="rule-icon-box">
                {getRuleIcon(index)}
              </div>
              <span className="rule-text">{rule}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
