import React from "react";
import Header from "./Header";
import TopBar from "./TopBar";
import Footer from "./Footer";
import {
  FaCheckSquare,
  FaRoute,
  FaBus,
  FaComments,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaUsers,
  FaSmile,
  FaCity,
} from "react-icons/fa";

export default function SobreNos() {
  return (
    <div className="sobre-nos-container">
      <TopBar />
      <Header logoSrc="/imagens/logo-png.png" />

      <main>
        <section className="sobre-nos-hero">
          <img // A imagem agora é referenciada a partir da pasta `public`
            src="/imagens/img2.png"
            alt="Ônibus da Aurora Transportes em uma estrada"
            className="sobre-nos-hero-image"
          />
          <div className="sobre-nos-hero-overlay"></div>
          <h1>Conheça a nossa história</h1>
        </section>

        {/* Bloco 1: Sobre Nós com Vídeo */}
        <section className="sobre-nos-intro-section">
          <div className="sobre-nos-intro-content">
            <h2>Sobre Nós</h2>
            <p>
              A Aurora Transportes nasceu com o propósito de transformar cada
              viagem em uma experiência segura, confortável e inesquecível.
              Especializada em transporte de passageiros para fretamento,
              turismo, excursões, eventos e deslocamentos corporativos, nossa
              empresa combina profissionalismo, tecnologia e compromisso para
              oferecer um serviço confiável do início ao fim.
            </p>
            <p>
              Com uma frota moderna e equipe qualificada, garantimos que cada
              trajeto seja realizado com pontualidade, segurança e atenção aos
              detalhes.
            </p>
          </div>
          <div className="sobre-nos-intro-media">
            <video autoPlay loop muted playsInline>
              <source src="/imagens/video-bus.mp4" type="video/mp4" />
              Seu navegador não suporta o vídeo.
            </video>
          </div>
        </section>

        {/* Bloco 2: Diferenciais em Cards */}
        <section className="diferenciais-section">
          <h2>Nossos Diferenciais</h2>
          <div className="diferenciais-grid">
            <div className="diferencial-card">
              <FaShieldAlt />
              <h3>Segurança Garantida</h3>
              <p>Inspeções frequentes e frotas revisadas para sua proteção.</p>
            </div>
            <div className="diferencial-card">
              <FaBus />
              <h3>Frota Moderna</h3>
              <p>Veículos climatizados e equipados para o seu conforto.</p>
            </div>
            <div className="diferencial-card">
              <FaUsers />
              <h3>Equipe Qualificada</h3>
              <p>Motoristas treinados e profissionais certificados.</p>
            </div>
            <div className="diferencial-card">
              <FaComments />
              <h3>Atendimento Humanizado</h3>
              <p>Suporte ágil e dedicado para superar suas expectativas.</p>
            </div>
          </div>
        </section>

        {/* Bloco 3: Números */}
        <section className="numeros-section">
          <h2>Nossos Resultados</h2>
          <div className="numeros-grid">
            <div className="numero-item">
              <FaSmile />
              <span className="numero-grande">2.500+</span>
              <span>Clientes Satisfeitos</span>
            </div>
            <div className="numero-item">
              <FaRoute />
              <span className="numero-grande">4.800+</span>
              <span>Viagens Realizadas</span>
            </div>
            <div className="numero-item">
              <FaCity />
              <span className="numero-grande">120+</span>
              <span>Cidades Atendidas</span>
            </div>
            <div className="numero-item">
              <FaUsers />
              <span className="numero-grande">35+</span>
              <span>Profissionais</span>
            </div>
          </div>
        </section>
      </main>

      {/* O Footer é incluído para manter a consistência da página */}
      <Footer />
    </div>
  );
}
