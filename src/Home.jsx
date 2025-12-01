import { useEffect, useState } from "react";
import FleetCard from "../components/FleetCard";
import ServiceCard from "../components/ServiceCard";
import fleet from "../data/fleet";
import services from "../data/services";
import initialReviews from "../data/reviews";

export default function Home() {
  const [reviews] = useState(initialReviews);
  const [currentReview, setCurrentReview] = useState(0);

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
          // Pega a porcentagem de visibilidade do elemento (de 0.0 a 1.0)
          const ratio = entry.intersectionRatio;

          // Calcula a posição X: começa em -100% e vai até 0%
          const translateX = -100 + ratio * 100;

          // A opacidade vai de 0 a 1 conforme a imagem aparece
          const opacity = ratio;

          // Aplica os estilos diretamente no elemento
          entry.target.style.opacity = opacity;
          entry.target.style.transform = `translateX(${translateX}%)`;
        });
      },
      {
        // Cria múltiplos "gatilhos" para a animação ser suave durante o scroll
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
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
            <ServiceCard key={service.id} data={service} />
          ))}
        </div>
      </section>

      <section className="img-section">
        {/* Imagem de fundo desfocada (não será alterada) */}
        <img src="/imagens/entrada.png" alt="" className="dark-image" />
        {/* Nova imagem PNG que vai deslizar por cima */}
        <img
          src="/imagens/img1.png" /* Caminho corrigido para absoluto */
          alt="Ônibus Aurora"
          className="slide-in-image"
        />
      </section>

      <section id="frota" className="block-section fleet-section">
        <h2>Frota</h2>
        <div className="grid fleet-grid">
          {fleet.map((item) => (
            <FleetCard key={item.id} data={item} />
          ))}
        </div>
      </section>

      <section id="nosso-dever" className="block-section duty-section">
        <div className="duty-content">
          <h2 className="duty-title">Nosso Dever</h2>
          <p>
            Nosso compromisso é com a sua segurança e conforto. Viaje conosco e
            tenha a certeza de um transporte de qualidade, com pontualidade e
            uma equipe dedicada a oferecer a melhor experiência em cada trajeto.
            A sua tranquilidade é a nossa prioridade.
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
    </>
  );
}
