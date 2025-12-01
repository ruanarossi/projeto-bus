export default function ServiceCard({ data }) {
  return (
    <div className="service-card">
      <div className="service-card-icon-wrapper">
        <img src={data.icon} alt={`Ícone de ${data.title}`} />
      </div>
      <h3 className="service-card-title">{data.title}</h3>
      <p className="service-card-desc">{data.desc}</p>
      <a href={data.link} className="service-card-button">
        Saiba mais
      </a>
    </div>
  );
}
