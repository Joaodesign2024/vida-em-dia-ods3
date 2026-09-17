
import { useEffect, useState } from 'react'
import { fetchCovidMA, fetchHealthTips, fetchIbgeMunicipiosMA } from '../services/api.js'

export default function DashboardAPI(){
  const [covid, setCovid]=useState(null)
  const [loadingCovid, setLoadingCovid]=useState(true)
  const [erroCovid, setErroCovid]=useState(null)
  const [tip, setTip]=useState('')
  const [municipios, setMunicipios]=useState([])
  const [buscaMun, setBuscaMun]=useState('Pinheiro')

  useEffect(()=>{
    // Fetch API 1 - COVID MA
    fetchCovidMA().then(setCovid).catch(e=>setErroCovid(e.message)).finally(()=>setLoadingCovid(false))
    // Fetch API 2 - Dica bem-estar
    fetchHealthTips().then(setTip).catch(()=>setTip('Beba água, durma bem e faça pausas durante os estudos.'))
    // Fetch API 3 - IBGE
    fetchIbgeMunicipiosMA().then(setMunicipios).catch(()=>{})
  },[])

  const filtradosMun = municipios.filter(m=>m.nome.toLowerCase().includes(buscaMun.toLowerCase())).slice(0,12)

  return (
    <section className="section-pad">
      <div className="container">
        <p className="section-label"><h1>--------------------------------------------</h1></p>
        <h2 className="section-title mb-4">Painel ao vivo</h2>

        <div className="row g-3">
          <div className="col-lg-5">
            <div className="api-card">
              <h3 className="h6 fw-bold"><i className="bi bi-activity me-2"></i>COVID-19 - Maranhão (Brasil)</h3>
              {loadingCovid && <div className="spinner-border text-success" role="status"></div>}
              {erroCovid && <div className="alert alert-danger small">{erroCovid} - exibindo fallback</div>}
              {covid && (
                <div className="mt-3">
                  <div className="row g-2">
                    <div className="col-6"><div className="metric-box"><strong>{covid.cases?.toLocaleString('pt-BR')}</strong><span>casos confirmados</span></div></div>
                    <div className="col-6"><div className="metric-box"><strong>{covid.deaths?.toLocaleString('pt-BR')}</strong><span>óbitos</span></div></div>
                    <div className="col-6"><div className="metric-box"><strong>{covid.suspects?.toLocaleString('pt-BR')}</strong><span>suspeitos</span></div></div>
                    <div className="col-6"><div className="metric-box"><strong>{new Date(covid.datetime).toLocaleDateString('pt-BR')}</strong><span>atualização</span></div></div>
                  </div>
                  <pre className="bg-dark text-white p-2 rounded small mt-3 mb-0" style={{maxHeight:180, overflow:'auto'}}>{JSON.stringify(covid, null, 2)}</pre>
                  <p className="small text-muted mt-2">Tratamento JSON: toLocaleString, formatação de data e exibição em cards + raw JSON para relatório.</p>
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="api-card mb-3">
              <h3 className="h6 fw-bold"><i className="bi bi-lightbulb me-2"></i>Dica de bem-estar</h3>
              <blockquote className="blockquote my-3"><p className="h6 fst-italic">"{tip}"</p></blockquote>
              <button className="btn btn-sm btn-outline-success" onClick={async()=>{
                const r=await fetch('https://api.adviceslip.com/advice'); const j=await r.json(); setTip(j.slip.advice)
              }}><i className="bi bi-arrow-clockwise me-1"></i> Nova dica</button>
              <div className="small text-muted mt-2"> Explore{"{ slips: { advice }}"}</div>
            </div>

            <div className="api-card">
              <h3 className="h6 fw-bold"><i className="bi bi-geo me-2"></i>Municípios do MA (Fonte:IBGE)</h3>
              <div className="input-group mt-2">
                <span className="input-group-text"><i className="bi bi-search"></i></span>
                <input className="form-control" value={buscaMun} onChange={e=>setBuscaMun(e.target.value)} placeholder="Filtrar município" />
              </div>
              <div className="row g-2 mt-2">
                {filtradosMun.map(m=><div key={m.id} className="col-6 col-md-4"><div className="badge badge-soft w-100 text-start p-2">{m.nome}</div></div>)}
              </div>
              <p className="small text-muted mt-2 mb-0">Total no MA: {municipios.length}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
