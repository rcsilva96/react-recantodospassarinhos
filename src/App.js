import { useState, useEffect } from "react";
import { translations } from "./data/translations";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Accommodation from "./pages/Accommodation";
import SwitchSimulator from "./components/SwitchSimulator";
import LocalGuide from "./components/LocalGuide";
import Emergency from "./pages/Emergency";
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

  const navigateToTab = (tabId) => {
    setActiveTab(tabId);
    setMenuAberto(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`app-wrapper ${darkMode ? "dark" : ""}`}>
      <Header 
        lang={lang} 
        setLang={setLang} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        setMenuAberto={setMenuAberto} 
        navigateToTab={navigateToTab} 
        t={t} 
      />

      <Sidebar 
        menuAberto={menuAberto} 
        setMenuAberto={setMenuAberto} 
        activeTab={activeTab} 
        navigateToTab={navigateToTab} 
        t={t} 
      />

      {/* Main Content Area */}
      <main className="conteudo">
        <div className="fade-in-section">
          {activeTab === "home" && (
            <Home 
              t={t} 
              showWifiPass={showWifiPass} 
              setShowWifiPass={setShowWifiPass} 
              wifiCopied={wifiCopied} 
              copyWifiPassword={copyWifiPassword} 
            />
          )}

          {activeTab === "rules" && (
            <Rules t={t} />
          )}

          {activeTab === "accommodation" && (
            <Accommodation t={t} />
          )}

          {activeTab === "switches" && (
            <SwitchSimulator lang={lang} t={t} />
          )}

          {activeTab === "guide" && (
            <LocalGuide lang={lang} t={t} />
          )}

          {activeTab === "emergency" && (
            <Emergency t={t} />
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
