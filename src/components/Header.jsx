import { Link, useLocation, useNavigate } from "react-router-dom";
import FaleConosco from "./FaleConosco";

export default function Header({ logoSrc }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    // Se já estiver na página inicial, apenas rola para o topo
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Se estiver em outra página, navega para a inicial
      navigate("/");
    }
  };

  return (
    <header className="header">
      <a href="/" onClick={handleHomeClick} className="logo-container">
        <img
          src={logoSrc}
          alt="Logo Aurora Transportes - Voltar ao início"
          className="logo"
        />
      </a>
      <nav>
        <a href="/" onClick={handleHomeClick}>
          Home
        </a>
        <Link to="/sobre-nos">Quem Somos</Link>
        <a href="/#servicos">Serviços</a>
        <a href="/#frota">Frota</a>
        <Link to="/destinos">Nossos Destinos</Link>
        <FaleConosco />
      </nav>
    </header>
  );
}
