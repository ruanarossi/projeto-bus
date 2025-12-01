export default function FleetCard({ data, onCardClick }) {
  // Função para renderizar o ícone dinamicamente
  const renderIcon = (IconComponent) => <IconComponent />;
  return (
    // Adicionando a classe 'fleet-card' para aplicar os estilos que definimos antes
    <div
      className="card fleet-card"
      onClick={onCardClick}
      style={{ cursor: "pointer" }}
    >
      {/* Contêiner para as imagens */}
      <div className="card-image-container">
        <img src={data.img} alt={data.name} className="card-image-base" />
        <img src={data.imgHover} alt={data.name} className="card-image-hover" />
      </div>

      <div className="card-content">
        <h3>{data.name}</h3>
      </div>
    </div>
  );
}
