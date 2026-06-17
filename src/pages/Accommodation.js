import React from "react";
import { 
  FaBed, FaDoorOpen, FaBath, FaTshirt, FaUtensils, 
  FaWind, FaShieldAlt, FaCar, FaCheck 
} from "react-icons/fa";

export default function Accommodation({ t }) {
  // Helper to map structure to icons
  const getStructureIcon = (index) => {
    const icons = [
      <FaBed />,                                   // 2 rooms
      <FaBed />,                                   // Double bed
      <FaBed />,                                   // Trundle bed
      <FaDoorOpen />,                              // Balcony
      <FaBath />,                                  // Bathrooms
      <FaTshirt />,                                // Laundry area
      <FaUtensils />,                              // Kitchen
      <FaWind className="blue-icon" />,            // AC
      <FaTshirt className="blue-icon" />,          // Wifi (re-mapped to custom or checked) - Wait, wifi is index 8, in translations list wifi is indeed index 8. Let's use FaCheck or other wifi icon
      <FaShieldAlt className="green-icon" />,      // Security
      <FaCar />                                    // Parking
    ];
    // Special check for index 8 which is Wi-Fi in structure.list
    if (index === 8) {
      return <FaCheck className="blue-icon" />;
    }
    return icons[index] || <FaCheck />;
  };

  // Helper to map amenities to icons
  const getAmenityIcon = (index) => {
    const icons = [
      <FaUtensils />,                              // Dishwasher
      <FaUtensils />,                              // Microwave
      <FaUtensils />,                              // Air fryer
      <FaUtensils />,                              // Minibar
      <FaUtensils />,                              // Kitchen utensils
      <FaWind />,                                  // Hair dryer
      <FaBath className="orange-icon" />,          // Hot water
      <FaTshirt />,                                // Retractable line
      <FaTshirt />,                                // Washing machine
      <FaTshirt />                                 // Iron
    ];
    return icons[index] || <FaCheck />;
  };

  return (
    <div className="tab-content">
      <div className="dashboard-row">
        {/* Structure Card */}
        <section className="card structure-card">
          <h2>{t.structure.title}</h2>
          <ul className="details-list">
            {t.structure.list.map((item, index) => (
              <li key={index} className="details-item">
                <span className="details-icon-wrapper">
                  {getStructureIcon(index)}
                </span>
                <span className="details-text">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Amenities Card */}
        <section className="card amenities-card">
          <h2>{t.amenities.title}</h2>
          <ul className="details-list">
            {t.amenities.list.map((item, index) => (
              <li key={index} className="details-item">
                <span className="details-icon-wrapper">
                  {getAmenityIcon(index)}
                </span>
                <span className="details-text">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
