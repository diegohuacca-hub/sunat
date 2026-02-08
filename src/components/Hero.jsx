import "./hero.css";
import foto from "../assets/foto.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={foto} alt="fondo" className="hero-img" />

      <div className="overlay">
        <h1>PLATAFORMA</h1>
        <h2>PARA FILTRAR</h2>
        <h2>PLACAS</h2>

        <div className="line"></div>

        <h3>ACCESOS</h3>
        <h3>GRATUITOS</h3>
      </div>
    </section>
  );
}
