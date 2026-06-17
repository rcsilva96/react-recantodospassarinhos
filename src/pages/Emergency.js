import React from "react";
import { FaShieldAlt, FaPhoneAlt, FaExclamationTriangle, FaAirbnb } from "react-icons/fa";

export default function Emergency({ t }) {
  return (
    <div className="tab-content">
      <section className="card emergency-card">
        <h2>{t.emergency.title}</h2>
        <p className="emergency-subtitle">{t.emergency.subtitle}</p>

        <div className="emergency-contacts-grid">
          {/* Police */}
          <a href="tel:190" className="emergency-contact-link police">
            <span className="contact-icon"><FaShieldAlt /></span>
            <div className="contact-details">
              <span className="contact-name">{t.emergency.police}</span>
              <span className="contact-number">190</span>
            </div>
          </a>

          {/* SAMU */}
          <a href="tel:192" className="emergency-contact-link samu">
            <span className="contact-icon"><FaPhoneAlt /></span>
            <div className="contact-details">
              <span className="contact-name">{t.emergency.samu}</span>
              <span className="contact-number">192</span>
            </div>
          </a>

          {/* Firefighters */}
          <a href="tel:193" className="emergency-contact-link firefighters">
            <span className="contact-icon"><FaExclamationTriangle /></span>
            <div className="contact-details">
              <span className="contact-name">{t.emergency.firefighters}</span>
              <span className="contact-number">193</span>
            </div>
          </a>

          {/* Airbnb Host contact */}
          <a 
            href="https://www.airbnb.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="emergency-contact-link airbnb"
          >
            <span className="contact-icon"><FaAirbnb /></span>
            <div className="contact-details">
              <span className="contact-name">AirBNB</span>
              <span className="contact-number">{t.emergency.airbnbContact}</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
