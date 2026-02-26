import "./login.css";

export default function LoginCard({ onLogin }) {
  return (
    <div className="login-bg">
      <div className="login-card">
        <div className="logo">
          🚗
        </div>

        <h2>SUBASTAS VEHICULARES</h2>
        <span className="badge">PERÚ</span>

        <h3>Plataforma para Filtrar Placas</h3>
        <p className="subtitle">Acceso restringido • Solo usuarios autorizados</p>

        <button className="btn-login" onClick={onLogin}>
          INGRESAR
        </button>

        <p className="footer-text">
          Accesos Gratuitos • Subastas Vehiculares Perú
        </p>
      </div>
    </div>
  );
}