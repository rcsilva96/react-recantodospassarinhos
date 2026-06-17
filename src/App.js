import { useState, useEffect } from "react";
import { 
  FaBars, FaTimes, FaWifi, FaCopy, FaCheck, FaPhoneAlt, 
  FaExclamationTriangle, FaMoon, FaSun, FaEye, FaEyeSlash, 
  FaGlobe, FaAirbnb, FaUsers, FaPaw, FaSmoking, FaUserTimes, 
  FaChild, FaGlassCheers, FaVolumeMute, FaSnowflake, FaSuitcase,
  FaBed, FaDoorOpen, FaBath, FaTshirt, FaUtensils, FaWind, 
  FaShieldAlt, FaCar, FaHome, FaInfoCircle, FaClipboardList, 
  FaRoute, FaBolt, FaHourglassHalf
} from "react-icons/fa";
import { translations } from "./data/translations";
import SwitchSimulator from "./components/SwitchSimulator";
import LocalGuide from "./components/LocalGuide";
import "./App.css";

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("recanto_lang") || "pt";
  });
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("recanto_dark") === "true";
  });
  const [menuAberto, setMenuAberto] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [showWifiPass, setShowWifiPass] = useState(false);
  const [wifiCopied, setWifiCopied] = useState(false);

  // Sync state with local storage & body classes
  useEffect(() => {
    localStorage.setItem("recanto_lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("recanto_dark", darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const t = translations[lang];

  // Helper to copy WiFi password
  const copyWifiPassword = () => {
    navigator.clipboard.writeText("Garay2026?");
    setWifiCopied(true);
    setTimeout(() => setWifiCopied(false), 2000);
  };

  // Helper to map rules to appropriate icons
  const getRuleIcon = (index) => {
    const icons = [
      <FaUsers />,            // Max capacity
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

  // Helper to map structure to icons
  const getStructureIcon = (index) => {
    const icons = [
      <FaBed />,           // 2 rooms
      <FaBed />,           // Double bed
      <FaBed />,           // Trundle bed
      <FaDoorOpen />,      // Balcony
      <FaBath />,          // Bathrooms
      <FaTshirt />,        // Laundry area
      <FaUtensils />,      // Kitchen
      <FaWind className="blue-icon" />,          // AC
      <FaWifi className="blue-icon" />,          // Wifi
      <FaShieldAlt className="green-icon" />,      // Security
      <FaCar />            // Parking
    ];
    return icons[index] || <FaCheck />;
  };

  // Helper to map amenities to icons
  const getAmenityIcon = (index) => {
    const icons = [
      <FaUtensils />,      // Dishwasher
      <FaUtensils />,      // Microwave
      <FaUtensils />,      // Air fryer
      <FaUtensils />,      // Minibar
      <FaUtensils />,      // Kitchen utensils
      <FaWind />,          // Hair dryer
      <FaBath className="orange-icon" />,          // Hot water
      <FaTshirt />,        // Retractable line
      <FaTshirt />,        // Washing machine
      <FaTshirt />         // Iron
    ];
    return icons[index] || <FaCheck />;
  };

  const navigateToTab = (tabId) => {
    setActiveTab(tabId);
    setMenuAberto(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`app-wrapper ${darkMode ? "dark" : ""}`}>
      {/* Header */}
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
              <option value="pt">PT</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
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
            <span>Recanto</span>
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

      {/* Main Content Area */}
      <main className="conteudo">
        <div className="fade-in-section">
          {activeTab === "home" && (
            <div className="tab-content">
              {/* Welcome Card */}
              <section className="card welcome-card">
                <h2>{t.welcomeTitle}</h2>
                <p>{t.welcomeText}</p>
              </section>

              {/* Wi-Fi & Check-in Dashboard Row */}
              <div className="dashboard-row">
                {/* Wi-Fi Card */}
                <section className="card wifi-card">
                  <div className="card-header-icon">
                    <FaWifi className="card-header-svg wifi-color" />
                    <h3>{t.wifi.title}</h3>
                  </div>
                  <div className="wifi-info-box">
                    <div className="info-field">
                      <span className="field-label">{t.wifi.network}:</span>
                      <span className="field-value font-mono">Recanto_Passarinhos_5G</span>
                    </div>
                    <div className="info-field">
                      <span className="field-label">{t.wifi.password}:</span>
                      <div className="password-wrapper">
                        <span className="field-value font-mono">
                          {showWifiPass ? "Garay2026?" : "•••••••••"}
                        </span>
                        <button 
                          className="wifi-toggle-show"
                          onClick={() => setShowWifiPass(!showWifiPass)}
                          aria-label="Toggle password visibility"
                        >
                          {showWifiPass ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className={`wifi-copy-btn ${wifiCopied ? "copied" : ""}`}
                    onClick={copyWifiPassword}
                  >
                    {wifiCopied ? (
                      <>
                        <FaCheck className="btn-icon" /> {t.wifi.copied}
                      </>
                    ) : (
                      <>
                        <FaCopy className="btn-icon" /> {t.wifi.copyBtn}
                      </>
                    )}
                  </button>
                </section>

                {/* Check-in/Check-out Card */}
                <section className="card checkin-card">
                  <div className="card-header-icon">
                    <FaHourglassHalf className="card-header-svg checkin-color" />
                    <h3>{t.checkin.title}</h3>
                  </div>
                  <div className="checkin-times">
                    <div className="time-row">
                      <span className="time-icon">🚪</span>
                      <span className="time-text">{t.checkin.in}</span>
                    </div>
                    <div className="time-row">
                      <span className="time-icon">🔑</span>
                      <span className="time-text">{t.checkin.out}</span>
                    </div>
                  </div>
                  <p className="support-notice">
                    <FaInfoCircle className="info-icon" />
                    {t.checkin.support}
                  </p>
                </section>
              </div>
            </div>
          )}

          {activeTab === "rules" && (
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
          )}

          {activeTab === "accommodation" && (
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
          )}

          {activeTab === "switches" && (
            <div className="tab-content">
              <SwitchSimulator lang={lang} t={t} />
            </div>
          )}

          {activeTab === "guide" && (
            <div className="tab-content">
              <LocalGuide lang={lang} t={t} />
            </div>
          )}

          {activeTab === "emergency" && (
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
          )}
        </div>

        {/* Footer info */}
        <footer className="footer-copyright">
          <p>VistaLabs - 2026</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
