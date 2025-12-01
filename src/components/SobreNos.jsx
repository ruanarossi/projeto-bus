import React from "react";

export default function SobreNos() {
  return (
    <div className="sobre-nos-container">
      {/* Seção de Destaque com Imagem de Fundo */}
      <section className="sobre-nos-hero">
        <img
          src="/imagens/sobre-nos-banner.jpg" // Substitua por uma imagem de banner da sua empresa
          alt="Equipe ou frota da Aurora Transportes"
          className="sobre-nos-hero-image"
        />
        <div className="sobre-nos-hero-overlay"></div>
        <h1>Nossa História, Sua Jornada</h1>
      </section>

      {/* Seção de Conteúdo com a História */}
      <section className="sobre-nos-content">
        <h2>Sobre a Aurora Transportes</h2>
        <p>
          Fundada em [Ano de Fundação], a Aurora Transportes nasceu com a missão
          de revolucionar o transporte, conectando pessoas e lugares com
          segurança, conforto e pontualidade. O que começou como um sonho com
          uma pequena frota, hoje se tornou uma referência no setor, atendendo
          milhares de passageiros todos os dias.
        </p>

        <h3>Nossa Missão</h3>
        <p>
          Oferecer soluções de mobilidade que superem as expectativas,
          garantindo uma experiência de viagem tranquila e eficiente, apoiada
          por uma equipe dedicada e uma frota moderna e segura.
        </p>

        <h3>Nossos Valores</h3>
        <ul>
          <li>✓ Segurança em primeiro lugar</li>
          <li>✓ Compromisso com o cliente</li>
          <li>✓ Pontualidade e eficiência</li>
          <li>✓ Inovação contínua</li>
          <li>✓ Respeito e ética</li>
        </ul>
      </section>
    </div>
  );
}
