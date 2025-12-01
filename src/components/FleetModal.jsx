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
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    textAlign: "left",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    fontSize: "1rem",
    color: "#333",
  },
  featureIcon: {
    color: "#0055a4",
    marginRight: "1rem",
    fontSize: "1.4rem",
  },
};

export default function FleetModal({ fleetItem, onClose }) {
  if (!fleetItem) return null;

  // Função para renderizar o ícone dinamicamente
  const renderIcon = (IconComponent) => <IconComponent />;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 style={styles.title}>{fleetItem.name}</h2>
        <ul style={styles.featureList}>
          {fleetItem.features?.map((feature, index) => (
            <li key={index} style={styles.featureItem}>
              <span style={styles.featureIcon}>{renderIcon(feature.icon)}</span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
