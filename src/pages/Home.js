import React from "react";
import { FaWifi, FaEye, FaEyeSlash, FaCheck, FaCopy, FaHourglassHalf, FaInfoCircle } from "react-icons/fa";

export default function Home({
  t,
  showWifiPass,
  setShowWifiPass,
  wifiCopied,
  copyWifiPassword
}) {
  return (
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
              <span className="field-value font-mono">OGNET2026</span>
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
  );
}
