export default function DriverCard({ data }) {
  return (
    <div className="card">
      <h3>{data.name}</h3>
      <p>Experiência: {data.experience} anos</p>
    </div>
  );
}
