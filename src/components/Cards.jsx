const servicios = [
  {
    title: "SUNARP",
    subtitle: "Consulta Vehicular",
    link: "https://www.gob.pe/358-consultar-los-datos-de-un-vehiculo-consulta-vehiculara"
  },
  {
    title: "SUNARP",
    subtitle: "Dueños y deudas detallado",
    link: "https://siguelo.sunarp.gob.pe/siguelo/?ref=webprtl"
  },
  {
    title: "SUTRAN",
    subtitle: "Récord de Infracciones",
    link: "https://www.sutran.gob.pe/consultas/record-de-infracciones/record-de-infracciones/"
  },
  {
    title: "SUTRAN",
    subtitle: "Récord de Infracciones",
    link: "https://www.sutran.gob.pe/consultas/record-de-infracciones/record-de-infracciones/"
  },
  {
    title: "SOAT",
    subtitle: "Consulta SOAT",
    link: "https://www.apeseg.org.pe/consultas-soat/"
  },
  {
    title: "SBS",
    subtitle: "Choques y Siniestros",
    link: "https://servicios.sbs.gob.pe/reportesoat/BusquedaPlaca"
  },
  {
    title: "MTC",
    subtitle: "Revisión Técnica",
    link: "https://rec.mtc.gob.pe/Citv/ArConsultaCitv"
  },
  {
    title: "SAT",
    subtitle: "Multas",
    link: "https://www.sat.gob.pe/pagosenlinea/"
  },

  {
    title: "SAT TACNA",
    subtitle: "Multas",
    link: "https://www.munitacna.gob.pe/pagina/sf/servicios/papeletas"
  },
  {
    title: "SAT HUANCAYO",
    subtitle: "Multas",
    link: "http://sathuancayo.fortiddns.com:888/VentanillaVirtual/ConsultaPIT.aspx"
  },
  {
    title: "SAT AREQUIPA",
    subtitle: "Multas",
    link: "https://www.muniarequipa.gob.pe/muni-virtual-4/"
  },
  {
    title: "SAT CUSCO",
    subtitle: "Multas",
    link: "https://cusco.gob.pe/informatica/index.php/"
  },

  {
    title: "ATU",
    subtitle: "Multas ATU",
    link: "https://pasarela.atu.gob.pe/#"
  },
  {
    title: "INFOGAS",
    subtitle: "Deuda de Gas",
    link: "https://infogas.com.pe/consulta-placa/"
  },
  {
    title: "PLACAS.PE",
    subtitle: "Cambio de Placa",
    link: "https://www.placas.pe/#/home"
  }
];

export default function Cards() {
  return (
    <section style={styles.container}>
      {servicios.map((s, i) => (
        <a
          key={i}
          href={s.link}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.card}
        >
          <h2>{s.title}</h2>
          <p>{s.subtitle}</p>
        </a>
      ))}
    </section>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "20px",
    padding: "30px",
    maxWidth: "900px",
    margin: "auto"
  },
  card: {
    background: "linear-gradient(145deg,#0c4a7a,#062f50)",
    padding: "30px 15px",
    borderRadius: "18px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,.4)",
    cursor: "pointer",
    transition: ".3s"
  }
};
