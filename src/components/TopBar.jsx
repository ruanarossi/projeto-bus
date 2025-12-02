import React from "react";
import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="social-icons-header">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
