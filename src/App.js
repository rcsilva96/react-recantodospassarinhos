import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./App.css";

function App() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className="header">
        <button
          className="menu-btn"
          onClick={() => setMenuAberto(true)}
        >
          <FaBars />
        </button>

        <h1>Recanto dos passarinhos</h1>
      </header>

      {menuAberto && (
        <div
          className="overlay"
          onClick={() => setMenuAberto(false)}
        />
      )}

      <aside className={`menu ${menuAberto ? "aberto" : ""}`}>
        <button
          className="fechar-btn"
          onClick={() => setMenuAberto(false)}
        >
          <FaTimes />
        </button>

        <a href="#inicio">🏠 Início</a>
        <a href="#wifi">📶 Wi-Fi</a>
        <a href="#regras">⚠️ Avisos importantes</a>
        <a href="#checkin">🚪 Check-in e Check-out</a>
        <a href="#sobre">🏡 Estrutura e Acomodações</a>
        <a href="#amenidades">✨ Comodidades Disponíveis</a>
        <a href="#pontos">📍 Pontos de interesse</a>
        <a href="#emergencia">☎️ Emergência</a>
      </aside>

      <main className="conteudo">

        <section id="inicio" className="card">
          <h2>Que bom ter você aqui!</h2>
          <p>
            Este é um apartamento aconchegante e preparado para proporcionar dias de descanso, lazer e conforto no Guarujá.

Ideal para casais, famílias ou profissionais em home office, o espaço oferece um ambiente tranquilo, bem equipado e com excelente conexão de internet para trabalho remoto, streaming e chamadas de vídeo.
          </p>
        </section>

        <section id="regras" className="card">
          <h2>⚠️ Avisos importantes</h2>

          <ul>
            <li>Capacidade máxima: 4 hóspedes</li>
            <li>Pets não são permitidos</li>
            <li>Fumar não é permitido</li>
            <li>Visitantes não são permitidos</li>
            <li>Menores de 13 anos não são permitidos</li>
            <li>Festas não são permitidas</li>
            <li>Roupa de cama não inclusa</li>
            <li>Serviço de praia não incluso</li>
            <li>Silêncio após 22h.</li>
          </ul>
        </section>

        <section id="wifi" className="card">
          <h2>📶 Wi-Fi</h2>

          <p>
            <strong>Rede:</strong> *********
          </p>

          <p>
            <strong>Senha:</strong> **********
          </p>

          <button
            onClick={() =>
              navigator.clipboard.writeText("Garay2026?")
            }
          >
            Copiar senha
          </button>
        </section>

        <section id="checkin" className="card">
          <h2>🚪 Check-in e check-out</h2>

          <p>
            Entrada a partir das 14h.
          </p>
          <p>
            Saída até 12h.
          </p>          
        </section>

        <section id="sobre" className="card">
          <h2>🏡 Estrutura e Acomodações</h2>

            <ul>

              <li>2 quartos confortáveis</li>
              <li>Cama de casal no quarto principal</li>
              <li>Bicama no quarto secundário para até 2 pessoas</li>
              <li>Sacada privativa</li>
              <li>Banheiro principal e banheiro de serviço</li>
              <li>Área de serviço</li>
              <li>Cozinha equipada</li>
              <li>Ar-condicionado no quarto principal</li>
              <li>Wi-Fi de alta velocidade</li>
              <li>Portaria 24 horas</li>
              <li>Vaga de garagem</li>

            </ul>
            
        </section>

        <section id="amenidades" className="card">
          <h2>✨ Comodidades Disponíveis</h2>

          <ul>
            <li>Máquina de lavar louças</li>
            <li>Micro-ondas</li>
            <li>Air Fryer</li>
            <li>Frigobar</li>
            <li>Panelas, pratos, copos e talheres</li>
            <li>Secador de cabelo</li>
            <li>Água quente</li>
            <li>Varal retrátil</li>
            <li>Máquina de lavar roupas</li>
            <li>Ferro e tábua de passar roupas</li>
          </ul>
        </section>

        <section id="mercados" className="card">
          <h2>📍 Pontos de interesse</h2>

          <ul>
            <li>Praia da Enseada – 2 km</li>
            <li>Boliche & Pub Enseada – 2,2 km</li>
            <li>Praia do Pernambuco – 5 km</li>
            <li>Acqua Mundo – 5,1 km</li>
            <li>Carrefour – 5,4 km</li>
            <li>Restaurante Brisa do Mar – 6 km</li>
            <li>Alcides Pizzaria – 6,1 km</li>
            <li>Praia das Pitangueiras – 6,5 km</li>
            <li>Mirante do Morro do Maluf – 6,6 km</li>
            <li>Centro do Guarujá – 7 km</li>
            <li>Shopping La Plage – 7 km</li>
            <li>Mirante das Galhetas – 10,1 km</li>
            <li>Assaí Atacadista – 10,3 km</li>
          </ul>
        </section>

        <section id="emergencia" className="card">
          <h2>☎️ Emergência</h2>

          <p>
            <a href="tel:190">Polícia - 190</a>
          </p>

          <p>
            <a href="tel:192">SAMU - 192</a>
          </p>

          <p>
            <a href="tel:193">Bombeiros - 193</a>
          </p>

          <p>
            <a href="www.airbnb.com">
              Contato do anfitrião no AirBNB
            </a>
          </p>
        </section>

        <section>
          <center>VistaLabs - 2026</center>
        </section>

      </main>
    </>
  );
}

export default App;
