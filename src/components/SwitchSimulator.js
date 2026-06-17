import React, { useState } from "react";
import { 
  FaCamera, FaInfoCircle, FaCouch, FaBed, FaRoute, FaBath, FaTshirt 
} from "react-icons/fa";
import "./SwitchSimulator.css";

// Helper component to display image or a premium placeholder
function SwitchImagePlaceholder({ src, alt, label }) {
  const [error, setError] = useState(false);

  return (
    <div className="switch-image-container">
      {!error ? (
        <img 
          src={src} 
          alt={alt} 
          className="switch-photo" 
          onError={() => setError(true)} 
        />
      ) : (
        <div className="switch-fallback">
          <FaCamera className="fallback-camera-icon" />
          <span className="fallback-text">{label}</span>
          <span className="fallback-path">Caminho da foto: {src}</span>
        </div>
      )}
    </div>
  );
}

export default function SwitchSimulator({ lang, t }) {
  const [activeRoom, setActiveRoom] = useState("living");

  // Helper to get room icon
  const getRoomIcon = (roomId) => {
    switch (roomId) {
      case "living": return <FaCouch />;
      case "bedroom1": return <FaBed />;
      case "bedroom2": return <FaBed />;
      case "hallway": return <FaRoute />;
      case "bathroom": return <FaBath />;
      case "laundry": return <FaTshirt />;
      default: return <FaCamera />;
    }
  };

  return (
    <div className="simulator-container">
      <div className="simulator-header">
        <h3>{t.switches.title}</h3>
        <p>{t.switches.subtitle}</p>
      </div>

      {/* Room Selection Tabs */}
      <div className="room-tabs">
        {[
          { id: "living", label: t.switches.rooms.living },
          { id: "bedroom1", label: t.switches.rooms.bedroom1 },
          { id: "bedroom2", label: t.switches.rooms.bedroom2 },
          { id: "hallway", label: t.switches.rooms.hallway },
          { id: "bathroom", label: `${t.switches.rooms.bathroomMain} / ${t.switches.rooms.bathroomService}` },
          { id: "laundry", label: t.switches.rooms.laundry },
        ].map((room) => (
          <button
            key={room.id}
            className={`room-tab-btn ${activeRoom === room.id ? "active" : ""}`}
            onClick={() => setActiveRoom(room.id)}
          >
            <span className="tab-icon">{getRoomIcon(room.id)}</span>
            <span className="tab-label">{room.label}</span>
          </button>
        ))}
      </div>

      {/* Guide display (Static Image + Legend) */}
      <div className="guide-display-grid">
        {activeRoom === "living" && (
          <>
            {/* Card 1: Sala - Painel Principal */}
            <div className="guide-card">
              <div className="guide-card-content">
                <SwitchImagePlaceholder 
                  src="/images/switches/sala_principal.jpg" 
                  alt="Interruptor da Sala Principal" 
                  label="Foto do Interruptor da Sala (5 Teclas)"
                />
                <div className="guide-legend-area">
                  <h4>{t.switches.rooms.living} - Painel Principal</h4>
                  <ul className="legend-list">
                    <li><span className="legend-num">1</span> {t.switches.labels.kitchen}</li>
                    <li><span className="legend-num">2</span> {t.switches.labels.tv}</li>
                    <li><span className="legend-num">3</span> {t.switches.labels.sofaLamp}</li>
                    <li><span className="legend-num">4</span> {t.switches.labels.unused}</li>
                    <li><span className="legend-num">5</span> {t.switches.labels.tableLight}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Sala - Sacada */}
            <div className="guide-card">
              <div className="guide-card-content">
                <SwitchImagePlaceholder 
                  src="/images/switches/sala_sacada.jpg" 
                  alt="Interruptor da Sacada" 
                  label="Foto do Interruptor da Sacada"
                />
                <div className="guide-legend-area">
                  <h4>{t.switches.rooms.living} - Sacada</h4>
                  <ul className="legend-list">
                    <li><span className="legend-num">1</span> {t.switches.labels.balcony}</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {activeRoom === "bedroom1" && (
          <>
            {/* Card 1: Quarto 1 - Dimmer */}
            <div className="guide-card">
              <div className="guide-card-content">
                <SwitchImagePlaceholder 
                  src="/images/switches/quarto1_dimmer.jpg" 
                  alt="Dimmer Quarto Principal" 
                  label="Foto do Dimmer (Quarto Principal)"
                />
                <div className="guide-legend-area">
                  <h4>{t.switches.rooms.bedroom1} - Dimmer</h4>
                  <ul className="legend-list">
                    <li><span className="legend-num">1</span> {t.switches.labels.dimmerRoom1}</li>
                  </ul>
                  <div className="alert-info legend-alert">
                    <FaInfoCircle className="info-icon" />
                    <p>Abajures são ligados e desligados em seus respectivos cabos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Quarto 1 - Cabeceira / Disjuntores */}
            <div className="guide-card">
              <div className="guide-card-content">
                <SwitchImagePlaceholder 
                  src="/images/switches/quarto1_disjuntores.jpg" 
                  alt="Interruptores Cabeceira" 
                  label="Foto dos Interruptores da Cabeceira"
                />
                <div className="guide-legend-area">
                  <h4>{t.switches.rooms.bedroom1} - Cabeceira</h4>
                  <ul className="legend-list">
                    <li><span className="legend-num">1</span> {t.switches.labels.bedLight}</li>
                    <li><span className="legend-num">2</span> {t.switches.labels.room1Light}</li>
                  </ul>
                  <div className="alert-info legend-alert warning">
                    <FaInfoCircle className="info-icon" />
                    <p>{t.switches.warningDimmer}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeRoom === "bedroom2" && (
          <>
            {/* Card 1: Quarto 2 - Ventilador e Luz */}
            <div className="guide-card">
              <div className="guide-card-content">
                <SwitchImagePlaceholder 
                  src="/images/switches/quarto2_ventilador.jpg" 
                  alt="Controle do Ventilador" 
                  label="Foto do Controle de Parede do Ventilador"
                />
                <div className="guide-legend-area">
                  <h4>{t.switches.rooms.bedroom2} - Ventilador</h4>
                  <ul className="legend-list">
                    <li><span className="legend-num">1</span> {t.switches.labels.room2Light}</li>
                    <li><span className="legend-num">2</span> {t.switches.labels.fanPower} ({t.switches.status.off})</li>
                    <li><span className="legend-num">3</span> {t.switches.labels.speedLow}</li>
                    <li><span className="legend-num">4</span> {t.switches.labels.speedMed}</li>
                    <li><span className="legend-num">5</span> {t.switches.labels.speedHigh}</li>
                  </ul>
                  <div className="alert-info legend-alert">
                    <FaInfoCircle className="info-icon" />
                    <p>{t.switches.fanNotice}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Quarto 2 - Luminária */}
            <div className="guide-card">
              <div className="guide-card-content">
                <SwitchImagePlaceholder 
                  src="/images/switches/quarto2_luminaria.jpg" 
                  alt="Interruptor Luminária" 
                  label="Foto do Segundo Interruptor"
                />
                <div className="guide-legend-area">
                  <h4>{t.switches.rooms.bedroom2} - Luminária</h4>
                  <ul className="legend-list">
                    <li><span className="legend-num">1</span> {t.switches.labels.lamp}</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {activeRoom === "hallway" && (
          <div className="guide-card">
            <div className="guide-card-content">
              <SwitchImagePlaceholder 
                src="/images/switches/corredor.jpg" 
                alt="Interruptor Corredor" 
                label="Foto do Interruptor do Corredor"
              />
              <div className="guide-legend-area">
                <h4>{t.switches.rooms.hallway}</h4>
                <ul className="legend-list">
                  <li><span className="legend-num">1</span> {t.switches.labels.hallwayLight}</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeRoom === "bathroom" && (
          <>
            {/* Card 1: Banheiro Principal */}
            <div className="guide-card">
              <div className="guide-card-content">
                <SwitchImagePlaceholder 
                  src="/images/switches/banheiro_principal.jpg" 
                  alt="Interruptor Banheiro Principal" 
                  label="Foto do Interruptor do Banheiro Principal"
                />
                <div className="guide-legend-area">
                  <h4>{t.switches.rooms.bathroomMain}</h4>
                  <ul className="legend-list">
                    <li><span className="legend-num">1</span> {t.switches.labels.boxArea}</li>
                    <li><span className="legend-num">2</span> {t.switches.labels.mirrorArea}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Banheiro de Serviço */}
            <div className="guide-card">
              <div className="guide-card-content">
                <SwitchImagePlaceholder 
                  src="/images/switches/banheiro_servico.jpg" 
                  alt="Interruptor Banheiro de Serviço" 
                  label="Foto do Interruptor do Banheiro de Serviço"
                />
                <div className="guide-legend-area">
                  <h4>{t.switches.rooms.bathroomService}</h4>
                  <ul className="legend-list">
                    <li><span className="legend-num">1</span> {t.switches.labels.sinkArea}</li>
                    <li><span className="legend-num">2</span> {t.switches.labels.bathArea}</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {activeRoom === "laundry" && (
          <div className="guide-card">
            <div className="guide-card-content">
              <SwitchImagePlaceholder 
                src="/images/switches/area_servico.jpg" 
                alt="Interruptor Área de Serviço" 
                label="Foto do Interruptor da Área de Serviço"
              />
              <div className="guide-legend-area">
                <h4>{t.switches.rooms.laundry}</h4>
                <ul className="legend-list">
                  <li><span className="legend-num">1</span> {t.switches.labels.laundryLight}</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
