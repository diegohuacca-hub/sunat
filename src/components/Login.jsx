import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Login({ onLogin }) {
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);

      const res = await signInWithPopup(auth, provider);
      const email = res.user.email?.toLowerCase().trim();

      console.log("EMAIL LOGEADO:", email);

      if (!email) {
        alert("❌ No se pudo obtener el correo");
        setLoading(false);
        return;
      }

      // Buscar documento con ID = email
      const ref = doc(db, "usuarios_autorizados", email);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        alert("❌ Acceso denegado\n\nCorreo no autorizado");
        await auth.signOut();
        setLoading(false);
        return;
      }

      console.log("✅ ACCESO AUTORIZADO");
      onLogin(res.user);

    } catch (err) {
      console.error("🔥 ERROR LOGIN:", err);
      alert("Error al iniciar sesión");
      setLoading(false);
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <div style={styles.logo}>🚗</div>
        <h1 style={styles.title}>SUBASTAS VEHICULARES</h1>
        <span style={styles.badge}>PERÚ</span>

        <h2 style={styles.subtitle}>Plataforma para Filtrar Placas</h2>
        <p style={styles.text}>
          Acceso restringido • Solo usuarios autorizados
        </p>

        <button onClick={login} style={styles.btn} disabled={loading}>
          {loading ? "Validando..." : "INGRESAR"}
        </button>

        <small style={styles.footer}>
          Acceso privado • Sistema seguro
        </small>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 20% 20%, #1b2b52, #040814)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    background: "rgba(18,28,47,0.9)",
    padding: "45px",
    borderRadius: "20px",
    width: "380px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 0 40px rgba(0,0,0,.5)",
  },
  logo: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    margin: "0 auto 10px",
  },
  title: { margin: 0 },
  badge: {
    background: "#ef4444",
    padding: "4px 12px",
    borderRadius: "999px",
    fontSize: "12px",
  },
  subtitle: { marginTop: "25px" },
  text: { opacity: 0.8 },
  btn: {
    marginTop: "25px",
    padding: "14px",
    width: "100%",
    borderRadius: "12px",
    background: "#2563eb",
    border: "none",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px",
  },
  footer: { opacity: 0.6, marginTop: "15px" },
};