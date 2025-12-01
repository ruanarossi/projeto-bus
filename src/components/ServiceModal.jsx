import React from "react";

// Estilos para o modal (embutidos para simplicidade)
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 34, 68, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff",
    borderRadius: "12px",
    padding: "30px 40px",
    width: "90%",
    maxWidth: "500px",
    position: "relative",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "transparent",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#888",
  },
  title: {
    color: "#003366",
    marginTop: 0,
    marginBottom: "1rem",
  },
  description: {
    color: "#555",
    fontSize: "1rem",
    lineHeight: 1.6,
  },
};

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 style={styles.title}>{service.title}</h2>
        <p style={styles.description}>{service.desc}</p>
        {/* Aqui você poderia adicionar mais detalhes do serviço */}
      </div>
    </div>
  );
}
