
import { useState, useMemo } from 'react'
import { recursos } from '../data/recursos.js'

export default function Recursos(){
  const [busca, setBusca] = useState('')
  const [cat, setCat] = useState('todos')
  const [fav, setFav] = useState(()=>{
    const s=localStorage.getItem('fav-recursos'); return s? JSON.parse(s): []
  })
  const [imc, setImc] = useState({ peso:'', altura:'', resultado:null })

  const filtrados = useMemo(()=>{
    return recursos.filter(r=>{
      const okCat = cat==='todos' || r.categoria===cat
      const q = busca.toLowerCase()
      const okBusca = r.titulo.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q) || r.tags.some(t=>t.includes(q))
      return okCat && okBusca
    })
  },[busca, cat])

  const toggleFav = (id)=>{
    const novo = fav.includes(id) ? fav.filter(f=>f!==id) : [...fav, id]
    setFav(novo); localStorage.setItem('fav-recursos', JSON.stringify(novo))
  }

  const calcularIMC = (e)=>{
    e.preventDefault()
    const p=parseFloat(imc.peso.replace(',','.')); const a=parseFloat(imc.altura.replace(',','.'))
    if(!p||!a) return
    const h = a>3? a/100 : a
    const valor = p/(h*h)
    let faixa=''; if(valor<18.5) faixa='Abaixo do peso'; else if(valor<25) faixa='Peso normal'; else if(valor<30) faixa='Sobrepeso'; else faixa='Obesidade'
    setImc(s=>({...s, resultado:{valor:valor.toFixed(1), faixa}}))
  }

  return (
    <section id="recursos-lista" className="section-pad bg-soft">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-6"><p className="section-label">🔍🔎</p><h2 className="section-title">Filtros, busca, favoritos e cálculo IMC em tempo real.</h2></div>
          <div className="col-lg-6">
            <div className="api-card">
              <div className="row g-2">
                <div className="col-md-7"><input value={busca} onChange={e=>setBusca(e.target.value)} placeholder="Buscar: ansiedade, vacina, sono..." className="form-control" /></div>
                <div className="col-md-5">
                  <select className="form-select" value={cat} onChange={e=>setCat(e.target.value)}>
                    <option value="todos">Todas categorias</option>
                    <option value="prevencao">Prevenção</option>
                    <option value="saude-mental">Saúde mental</option>
                    <option value="vacinacao">Vacinação</option>
                    <option value="atendimento">Atendimento</option>
                  </select>
                </div>
              </div>
              <div className="mt-2 small text-muted">Exibindo {filtrados.length} de {recursos.length} • Favoritos: {fav.length}</div>
            </div>
          </div>
        </div>

        <div className="row g-3">
          {filtrados.map(r=>(
            <div key={r.id} className="col-md-6 col-xl-3">
              <article className="resource-card h-100 d-flex flex-column">
                <span className="resource-icon"><i className={`bi ${r.icon}`}></i></span>
                <h3 className="h6 fw-bold">{r.titulo}</h3>
                <p className="small flex-grow-1">{r.desc}</p>
                <div className="d-flex gap-2 flex-wrap mb-2">{r.tags.map(t=><span key={t} className="badge badge-soft">{t}</span>)}</div>
                <div className="d-flex gap-2">
                  <button className={`btn btn-sm ${fav.includes(r.id)?'btn-success':'btn-outline-success'}`} onClick={()=>toggleFav(r.id)}><i className={`bi ${fav.includes(r.id)?'bi-heart-fill':'bi-heart'}`}></i> {fav.includes(r.id)?'Salvo':'Salvar'}</button>
                  <button className="btn btn-sm btn-outline-dark" onClick={()=>{document.getElementById('imc-area')?.scrollIntoView({behavior:'smooth'})}}>Ver mais</button>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div id="imc-area" className="row g-4 mt-4">
          <div className="col-lg-6">
            <div className="api-card">
              <h3 className="h6 fw-bold"><i className="bi bi-calculator me-2"></i>Calculadora IMC - interatividade</h3>
              <form onSubmit={calcularIMC} className="row g-2 mt-2">
                <div className="col-6"><label className="form-label small">Peso (kg)</label><input className="form-control" value={imc.peso} onChange={e=>setImc({...imc, peso:e.target.value})} placeholder="70" required /></div>
                <div className="col-6"><label className="form-label small">Altura (m)</label><input className="form-control" value={imc.altura} onChange={e=>setImc({...imc, altura:e.target.value})} placeholder="1,70" required /></div>
                <div className="col-12 d-grid"><button className="btn btn-success" type="submit">Calcular</button></div>
              </form>
              {imc.resultado && <div className="alert alert-success mt-3 mb-0">IMC: <strong>{imc.resultado.valor}</strong> - {imc.resultado.faixa}</div>}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="api-card h-100">
              <h3 className="h6 fw-bold"><i className="bi bi-wind me-2"></i>Respiração 4-7-8</h3>
              <Respiracao />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

function Respiracao(){
  const [fase, setFase]=useState('Pronto')
  const [ativo, setAtivo]=useState(false)
  const iniciar=()=>{
    if(ativo) return; setAtivo(true); let ciclo=0
    const sequencia=[['Inspire 4s',4000],['Segure 7s',7000],['Expire 8s',8000]]
    let idx=0
    const tick=()=>{
      setFase(sequencia[idx][0]); setTimeout(()=>{
        idx=(idx+1)%sequencia.length; if(idx===0) ciclo++; if(ciclo<2){ tick() } else { setFase('Concluído ✔'); setAtivo(false) }
      }, sequencia[idx][1])
    }
    tick()
  }
  return (
    <div>
      <div className="display-6 fw-bold text-success">{fase}</div>
      <p className="small text-muted">Exercício guiado para ansiedade.</p>
      <button className="btn btn-dark btn-sm" onClick={iniciar} disabled={ativo}>{ativo?'Respirando...':'Iniciar'}</button>
    </div>
  )
}
