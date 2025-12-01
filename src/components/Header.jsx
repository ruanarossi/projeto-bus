import FaleConosco from "./FaleConosco";

export default function Header({ logoSrc }) {
  return (
    <header className="header">
      <a href="#home" className="logo-container">
        <img
          src={logoSrc}
          alt="Logo Aurora Transportes - Voltar ao início"
          className="logo"
        />
      </a>
      <nav>
        <a href="#home">Home</a>
        <a href="#">Quem Somos</a>
        <a href="/#servicos">Serviços</a>
        <a href="/#frota">Frota</a>
        <a href="#">Nossos Destinos</a>
        <FaleConosco />
      </nav>
    </header>
  );
}
