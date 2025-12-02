import React from "react";

// Os mesmos destinos de antes, agora com coordenadas para posicionamento absoluto
const destinos = [
  {
    name: "Belém",
    style: { top: "18%", left: "66%" },
  },
  {
    name: "Salvador",
    style: { top: "44%", left: "89%" },
  },
  {
    name: "Maceió",
    style: { top: "39%", left: "95%" },
  },
  {
    name: "Cuiabá",
    style: { top: "51%", left: "46%" },
  },
  {
    name: "Brasília",
    style: { top: "51%", left: "67%" },
  },
  {
    name: "Belo Horizonte",
    style: { top: "61.5%", left: "78.5%" },
  },
  {
    name: "Vitória",
    style: { top: "62%", left: "86%" },
  },
  {
    name: "Rio de Janeiro",
    style: { top: "69%", left: "80.5%" },
  },
  {
    name: "São Paulo",
    style: { top: "72.5%", left: "69%" },
  },
  {
    name: "Curitiba",
    style: { top: "76.5%", left: "63%" },
  },
  {
    name: "Florianópolis",
    style: { top: "83%", left: "64%" },
  },
];

const MapaDestinos = () => {
  return (
    <div className="mapa-imagem-container">
      <img
        src="/imagens/mapa.webp"
        alt="Mapa do Brasil com os destinos da Aurora Transportes"
      />
      {destinos.map((destino) => (
        <button key={destino.name} className="mapa-ponto" style={destino.style}>
          <span className="mapa-ponto-label">{destino.name}</span>
        </button>
      ))}
    </div>
  );
};

export default MapaDestinos;
