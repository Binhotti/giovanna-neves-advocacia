import { areas, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer theme-dark">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            {site.name.toUpperCase()} <span>{site.title}</span>
          </p>
          {site.oab ? <p className="footer-muted">{site.oab}</p> : null}
          {site.city ? <p className="footer-muted">{site.city}</p> : null}
          <p className="footer-muted">Atendimento presencial e digital em todo o Brasil</p>
        </div>

        <div>
          <p className="footer-head">Áreas</p>
          <ul>
            {areas.map((a) => (
              <li key={a.id}>
                <a href="#areas">{a.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-head">Contato</p>
          <ul>
            <li>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            {site.instagram ? (
              <li>
                <a
                  href={`https://instagram.com/${site.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            ) : null}
            {site.email ? (
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="container footer-legal">
        <p>
          © {year} {site.name} Advocacia. Todos os direitos reservados. O conteúdo deste
          site tem caráter meramente informativo e não constitui promessa de resultado nem
          substitui consulta jurídica individualizada.
        </p>
      </div>
    </footer>
  );
}
