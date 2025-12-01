import { useEffect, useState } from "react";
import Header from "./components/Header";
import FleetCard from "./components/FleetCard";
import fleet from "./data/fleet";
import services from "./data/services";
import initialReviews from "./data/reviews";
import ServiceModal from "./components/ServiceModal"; // 1. Importe o novo componente de modal
import FleetModal from "./components/FleetModal"; // Importe o modal da frota
import ServiceCard from "./components/ServiceCard2"; // Corrigido: Importa o card com a lógica do modal

import { FaInstagramSquare, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

import "./App.css";

export default function App() {
  const [reviews] = useState(initialReviews);
  const [currentReview, setCurrentReview] = useState(0);
  const [selectedService, setSelectedService] = useState(null); // 2. Estado para o serviço selecionado
  const [selectedFleet, setSelectedFleet] = useState(null); // Estado para o item da frota selecionado

  // Estado e imagens para o carrossel da seção "Nosso Dever"
  const dutyImages = [
    "/imagens/nosso-dever.png",
    "/imagens/interior.png", // Exemplo de outra imagem
    "/imagens/passageiros.png", // Exemplo de outra imagem
  ];
  const [currentDutyImage, setCurrentDutyImage] = useState(0);
  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };
  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Função para navegar no carrossel "Nosso Dever" pelos pontos
  const handleDutyDotClick = (index) => {
    setCurrentDutyImage(index);
  };

  // Lógica para a animação de scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Opcional: para a animação acontecer só uma vez
          }
        });
      },
      {
        // A animação começa quando 25% do elemento estiver visível
        rootMargin: "0px",
        threshold: 0.25,
      }
    );

    const animatedElements = document.querySelectorAll(".slide-in-image");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Limpa o observer ao desmontar o componente
  }, []);

  // Efeito para troca automática de imagens na seção "Nosso Dever"
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDutyImage((prevIndex) => (prevIndex + 1) % dutyImages.length);
    }, 4000); // Troca a imagem a cada 4 segundos

    return () => clearInterval(timer); // Limpa o timer ao desmontar
  }, []);

  return (
    <>
      <Header logoSrc="/imagens/logo-png.png" />

      <main>
        <section id="home" className="hero">
          <video
            autoPlay
            loop
            muted
            className="hero-video"
            key="/imagens/video.mp4"
          >
            <source src="/imagens/video.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <h1>Aurora Transportes</h1>
          <p>Transporte seguro, eficiente e confortável para sua rotina.</p>
        </section>

        <section id="servicos" className="block-section">
          <h2>Nossos Serviços</h2>
          <div className="grid">
            {services.map((service) => (
              // 3. Passe a função para abrir o modal para cada card
              <ServiceCard
                key={service.id}
                data={service}
                onSaibaMaisClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </section>

        <section className="img-section">
          {/* Imagem de fundo desfocada (não será alterada) */}
          <img src="/imagens/entrada.png" alt="" className="dark-image" />
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

        <section id="nosso-dever" className="block-section duty-section">
          <div className="duty-content">
            <h2 className="duty-title">Nosso Dever</h2>
            <p>
              Nosso compromisso é com a sua segurança e conforto. Viaje conosco
              e tenha a certeza de um transporte de qualidade, com pontualidade
              e uma equipe dedicada a oferecer a melhor experiência em cada
              trajeto. A sua tranquilidade é a nossa prioridade.
            </p>
          </div>
          {/* Carrossel de imagens */}
          <div className="duty-carousel-container">
            <div
              className="duty-carousel-wrapper"
              style={{ transform: `translateX(-${currentDutyImage * 100}%)` }}
            >
              {dutyImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Imagem ${index + 1} do compromisso da Aurora`}
                  className="duty-image"
                />
              ))}
            </div>
            <div className="duty-carousel-dots">
              {dutyImages.map((_, index) => (
                <span
                  key={index}
                  className={index === currentDutyImage ? "dot active" : "dot"}
                  onClick={() => handleDutyDotClick(index)}
                ></span>
              ))}
            </div>
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
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-column footer-company-info">
            <div className="footer-logo">
              <img src="/imagens/logo-branca.png" alt="Aurora Transportes" />
            </div>
            <p className="footer-cnpj">CNPJ: 00.000.000/0001-00</p>
            <div className="footer-social">
              <h4>Siga-nos nas redes sociais</h4>
              <div className="social-icons">
                <a
                  href="#"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4>Navegue pelos Serviços</h4>
            <ul>
              <li>
                <a href="#">Passagens</a>
              </li>
              <li>
                <a href="#">Orçamento para Fretamento</a>
              </li>
              <li>
                <a href="#">Fretamento Pedagógico</a>
              </li>
              <li>
                <a href="#">Fretamento Empresarial</a>
              </li>
              <li>
                <a href="#">Fretamento Turístico</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Institucional</h4>
            <ul>
              <li>
                <a href="#">Quem somos</a>
              </li>
              <li>
                <a href="#">Serviços a bordo</a>
              </li>
              <li>
                <a href="#">Nossa frota</a>
              </li>
              <li>
                <a href="#">Sustentabilidade</a>
              </li>
              <li>
                <a href="#">Destinos</a>
              </li>
              <li>
                <a href="#">Fale conosco</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h4>Contato</h4>
            <p>SAC: 0800 880 2006</p>
            <p>SAC para Deficiente Auditivo: 0800 880 2007</p>
            <a href="#" className="footer-contact-link">
              Regras de viagem
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Aurora Transportes — Todos os direitos reservados</p>
          <a href="#">LGPD</a>
          <p>Site desenvolvido por Scale</p>
        </div>
      </footer>

      <a
        href="https://wa.me/5511999999999" // Substitua pelo seu número de telefone
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

      {/* 4. Renderize o modal se um serviço estiver selecionado */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Renderize o modal da frota se um item estiver selecionado */}
      <FleetModal
        fleetItem={selectedFleet}
        onClose={() => setSelectedFleet(null)}
      />
    </>
  );
}
