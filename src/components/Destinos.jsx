import React from "react";
import Header from "./Header";
import TopBar from "./TopBar";
import MapaDestinos from "./MapaDestinos";
import Footer from "./Footer";

export default function Destinos() {
  return (
    <div className="sobre-nos-container">
      <TopBar />
      <Header logoSrc="/imagens/logo-png.png" />

      <main>
        <section className="sobre-nos-hero">
          <img
            src="/imagens/passageiros.png" // Imagem de fundo da página
            alt="Painel de destinos de viagens"
            className="sobre-nos-hero-image"
          />
          <div className="sobre-nos-hero-overlay"></div>
          <h1>Nossos Destinos</h1>
        </section>

        <section className="sobre-nos-content">
          <h2 style={{ marginBottom: "1rem" }}>
            Explore o Brasil com a Aurora Transportes
          </h2>
          <p>
            Navegue pelo mapa e conheça alguns dos nossos principais destinos.
            Oferecemos rotas personalizadas para todo o país, garantindo uma
            viagem segura e confortável para turismo, eventos ou fretamento.
          </p>
          <div className="mapa-wrapper">
            <MapaDestinos />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
