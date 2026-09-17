
export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5"><h2 className="h5 fw-bold text-white">Vida em Dia</h2><p className="small">ODS 3 - Aplicação SPA React finalizada com Fetch API, componentes, estado e publicação Vercel.</p></div>
          <div className="col-lg-3"><h3 className="h6 fw-bold text-white">Stack</h3><ul className="list-unstyled small"><li>React 18 + Router (SPA)</li><li>Bootstrap 5.3 + Icons</li><li>Fetch API + JSON</li><li>LocalStorage</li></ul></div>
          <div className="col-lg-4"><h3 className="h6 fw-bold text-white">Teste</h3><p className="small mb-1"><i className="bi bi-envelope me-2"></i>vidaemdia@outlook.com</p><p className="small">Responsivo testado em Chrome DevTools 320px-1920px.</p></div>
        </div>
        <hr className="border-secondary" /><p className="small mb-0">Projeto educacional Nota 2 - Nota 3 apresentação presencial no polo.</p>
      </div>
    </footer>
  )
}
