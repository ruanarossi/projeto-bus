import React from "react";

export default function ServiceCard({ data, onSaibaMaisClick }) {
  return (
    <div className="service-card">
      <div className="service-card-icon-wrapper">
        <img src={data.icon} alt={`Ícone para ${data.title}`} />
      </div>
      <h3 className="service-card-title">{data.title}</h3>
      <p className="service-card-desc">{data.desc}</p>

      {/*
        Este botão agora chama a função passada por props,
        em vez de navegar para um link.
      */}
      <button onClick={onSaibaMaisClick} className="service-card-button">
        Saiba Mais
      </button>
    </div>
  );
}
