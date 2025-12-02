import { useEffect, useState } from "react";
import Header from "./components/Header";
import TopBar from "./components/TopBar"; // Importa a nova TopBar
import FleetCard from "./components/FleetCard";
import fleet from "./data/fleet";
import services from "./data/services";
import initialReviews from "./data/reviews";
import ServiceModal from "./components/ServiceModal";
import FleetModal from "./components/FleetModal";
import ServiceCard from "./components/ServiceCard2"; // Mantido
import Footer from "./components/Footer"; // Importa o Footer correto

import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [reviews] = useState(initialReviews);
  const [currentReview, setCurrentReview] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedFleet, setSelectedFleet] = useState(null);

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };
  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Lógica para a animação de scroll
  useEffect(() => {
    const image = document.querySelector(".slide-in-image");
    if (!image) return;

    let currentX = 350; // Posição inicial (fora da tela, à direita)
    let targetX = 350; // Posição alvo inicial

    const handleScroll = () => {
      const section = document.querySelector(".img-section");
      if (section) {
        const { top, height } = section.getBoundingClientRect();
        const scrollProgress = -top / (height - window.innerHeight);
        const progress = Math.max(0, Math.min(1, scrollProgress));

        // Define a posição alvo com base no scroll (movimento da direita para a esquerda)
        targetX = 350 - progress * 500;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Loop de animação para suavizar o movimento
    const animate = () => {
      // Interpola a posição atual em direção à posição alvo
      currentX += (targetX - currentX) * 0.1; // O valor 0.08 controla a suavidade

      image.style.transform = `translateX(${currentX}px)`;
      requestAnimationFrame(animate); // Continua o loop de animação
    };

    const animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId); // Limpa o loop de animação
    };
  }, []);

  return (
    <>
      <TopBar />
      <Header logoSrc="/imagens/logo-png.png" />

      <section id="home" className="hero">
        <video
          autoPlay
          loop
          muted
          className="hero-video"
          key="/imagens/video.mp4"
        >
          <source src="/imagens/video-hero.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <h1>Aurora Transportes</h1>
        <p>Transporte seguro, eficiente e confortável para sua rotina.</p>
      </section>

      <section id="servicos" className="block-section">
        <h2>Nossos Serviços</h2>
        <div className="grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              data={service}
              onSaibaMaisClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </section>

      <section className="img-section">
        {/* Imagem de fundo escura */}
        <img
          src="/imagens/entrada.png"
          alt="Estrada vista de dentro de um ônibus"
          className="dark-image"
        />
        {/* Imagem que vai deslizar por cima */}
        <img
          src="/imagens/bus-png.png"
          alt="Ônibus Double Decker da Aurora"
          className="slide-in-image"
        />
      </section>

      <section id="frota" className="block-section fleet-section">
        <h2>Frota</h2>
        <div className="grid fleet-grid">
          {fleet.map((item) => (
            <FleetCard
              key={item.id}
              data={item}
              onCardClick={() => setSelectedFleet(item)}
            />
          ))}
        </div>
      </section>

      {/* Nova seção: Onde Nos Encontrar */}
      <section
        id="onde-nos-encontrar"
        className="block-section onde-encontrar-section"
      >
        <div className="onde-encontrar-content">
          <h2>Onde Nos Encontrar</h2>
          <p>
            Estamos localizados em um ponto estratégico para melhor atendê-lo.
            Venha nos visitar ou entre em contato pelos nossos canais.
          </p>
          <p>
            <strong>Endereço:</strong> Av. Salgado Filho — Pátio Operacional
            Aurora Transportes
          </p>
          <p>
            <strong>Horário de Atendimento:</strong> Segunda a Sexta, das 08h às
            18h
          </p>
          <p>
            <strong>Telefone/WhatsApp:</strong> (22) 99554-1264
          </p>
          <p>
            <strong>E-mail:</strong> atendimento@auroratransportes.com
          </p>

          <a
            href="https://maps.app.goo.gl/aizdV9kc7fvXDfH3A"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            Ver no mapa
          </a>
        </div>
        <div className="onde-encontrar-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12310.632525288725!2d-46.54025815958724!3d-23.461440293414604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef54397139dd9%3A0x7cc21d3799600f22!2sAv.%20Salgado%20Filho%2C%20323%20-%20Centro%2C%20Guarulhos%20-%20SP%2C%2007115-000!5e0!3m2!1spt-BR!2sbr!4v1764623767918!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Aurora Transportes"
          ></iframe>
        </div>
      </section>

      <section id="depoimentos" className="block-section reviews-section">
        <h2>Além disso, veja o que nossos passageiros dizem:</h2>
        <div className="review-section-wrapper">
          {reviews.length > 1 && (
            <button
              onClick={handlePrevReview}
              className="review-nav-button prev"
            >
              ‹
            </button>
          )}
          <div className="review-carousel-container">
            <div
              className="review-carousel-wrapper"
              style={{
                transform: `translateX(-${currentReview * 100}%)`,
              }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="review-slide">
                  <div className="review-image-wrapper">
                    <img src={review.image} alt={review.name} />
                  </div>
                  <article className="review-card">
                    <div className="review-stars">★★★★★</div>
                    <h3>{review.name}</h3>
                    <p>{review.body}</p>
                    <span>— {review.email}</span>
                  </article>
                </div>
              ))}
            </div>
          </div>
          {reviews.length > 1 && (
            <button
              onClick={handleNextReview}
              className="review-nav-button next"
            >
              ›
            </button>
          )}
        </div>
      </section>

      <Footer />

      <a
        href="https://wa.me/5511999999999" // Substitua pelo seu número de telefone
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      <FleetModal
        fleetItem={selectedFleet}
        onClose={() => setSelectedFleet(null)}
      />
    </>
  );
}
