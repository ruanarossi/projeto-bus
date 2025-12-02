import { useState } from "react";

export default function FaleConosco() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão que se parece com um link para manter a consistência do menu */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        className="fale-conosco-button" /* Classe alterada para estilização */
      >
        Fale Conosco
      </a>

      {/* Modal */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "420px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              color: "#333", // Garante que o texto dentro do modal seja legível
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: 10, color: "#003366" }}>
              Fale Conosco
            </h2>

            <p>
              Entre em contato com a <strong>Aurora Transportes</strong>. Nossa
              equipe está pronta para ajudar você com orçamentos, informações
              sobre serviços, suporte operacional e soluções de mobilidade.
            </p>

            <hr
              style={{
                margin: "15px 0",
                border: "none",
                borderTop: "1px solid #eee",
              }}
            />

            <p>
              <strong>Telefone:</strong> (22) 99554-1264
            </p>
            <p>
              <strong>E-mail:</strong> atendimento@auroratransportes.com
            </p>
            <p>
              <strong>Endereço:</strong> Av. Salgado Filho — Pátio Operacional
              Aurora Transportes
            </p>
            <p>
              <strong>Atendimento:</strong> Segunda a Sexta, 08h às 18h
            </p>

            <button
              onClick={() => setOpen(false)}
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "10px",
                backgroundColor: "#003B73",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
