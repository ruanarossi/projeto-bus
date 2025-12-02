import React from "react";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-column footer-company-info">
          <div className="footer-logo">
            <img src="/imagens/logo-branca.png" alt="Aurora Transportes" />
          </div>
          <p className="footer-cnpj">CNPJ: 19.164.265/0001-66</p>
          <div className="footer-social">
            <h4>Siga-nos nas redes sociais</h4>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                aria-label="Facebook da Aurora Transportes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn da Aurora Transportes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram da Aurora Transportes"
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
        <p>
          © {new Date().getFullYear()} Aurora Transportes. Todos os direitos
          reservados.
        </p>
        <a href="/privacidade">Política de Privacidade</a>
      </div>
    </footer>
  );
}
