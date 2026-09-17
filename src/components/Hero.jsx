
import { useState, useEffect } from 'react'
export default function Hero(){
  const [habitos, setHabitos] = useState(()=>{
    const s = localStorage.getItem('habitos-vidaemdia')
    return s ? JSON.parse(s) : { agua:2, passos:0, sono:0 }
  })
  useEffect(()=>{ localStorage.setItem('habitos-vidaemdia', JSON.stringify(habitos)) },[habitos])

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <p className="eyebrow">ODS 3 • Saúde e Bem-Estar • Pinheiro-MA</p>
            <h1 className="display-5 fw-bolder">Saúde e bem-estar com informação clara para a comunidade.</h1>
            <p className="lead">Interface da Nota 1 transformada em SPA React: filtro, eventos, DOM, localStorage e consumo de APIs públicas em JSON.</p>
            <div className="d-flex flex-wrap gap-3 mt-3">
              <a href="#recursos-lista" className="btn btn-success btn-lg"><i className="bi bi-journal-medical me-2"></i>Ver recursos</a>
              <a href="/dashboard" className="btn btn-outline-dark btn-lg"><i className="bi bi-broadcast me-2"></i>Ver dados ao vivo</a>
            </div>

            <div className="habito-card mt-4">
              <div className="d-flex justify-content-between align-items-center">
                <strong><i className="bi bi-droplet me-2"></i>Meus hábitos de hoje</strong>
                <span className="badge badge-soft">{habitos.agua} copos água</span>
              </div>
              <div className="d-flex gap-2 mt-3">
                <button className="btn btn-sm btn-outline-success" onClick={()=>setHabitos(h=>({...h, agua:h.agua+1}))}>+1 água</button>
                <button className="btn btn-sm btn-outline-secondary" onClick={()=>setHabitos({agua:2, passos:0, sono:0})}>Reset</button>
                <button className="btn btn-sm btn-dark" onClick={()=>{
                  const el=document.getElementById('recursos-lista'); el?.scrollIntoView({behavior:'smooth'})
                }}>Explorar</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ods-panel">
              <div className="d-flex align-items-center gap-3 mb-2"><span className="ods-number">3</span><div><h2 className="h5 mb-0 fw-bold">ODS 3</h2><small>Assegurar vida saudável para todos</small></div></div>
              <p className="small">Situação-problema: dificuldade de acesso a orientações simples sobre vacinação, saúde mental e serviços locais. Público: estudantes, famílias e moradores. Objetivo: reunir prevenção e canais de apoio.</p>
              <div className="row g-2">
                <div className="col-4"><div className="metric-box text-center"><strong>React</strong><small>SPA</small></div></div>
                <div className="col-4"><div className="metric-box text-center"><strong>Fetch</strong><small>API JSON</small></div></div>
                <div className="col-4"><div className="metric-box text-center"><strong>DOM</strong><small>Eventos</small></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
