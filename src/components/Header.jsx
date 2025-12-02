import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FaleConosco from "./FaleConosco";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header({ logoSrc }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleHomeClick = (e) => {
    e.preventDefault();
    // Se já estiver na página inicial, apenas rola para o topo
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Se estiver em outra página, navega para a inicial
      navigate("/");
    }
    closeMenu();
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
      <button className="hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={isMenuOpen ? "main-nav open" : "main-nav"}>
        <a href="/" onClick={handleHomeClick}>
          Home
        </a>
        <Link to="/sobre-nos" onClick={closeMenu}>
          Quem Somos
        </Link>
        <a href="/#servicos" onClick={closeMenu}>
          Serviços
        </a>
        <a href="/#frota" onClick={closeMenu}>
          Frota
        </a>
        <Link to="/destinos" onClick={closeMenu}>
          Nossos Destinos
        </Link>
        <FaleConosco onClick={closeMenu} />
      </nav>
    </header>
  );
}
