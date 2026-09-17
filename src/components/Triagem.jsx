
import { useState } from 'react'
export default function Triagem(){
  const [form, setForm]=useState({perfil:'Estudante', tema:'Saúde mental', mensagem:'', nome:'', aceito:false})
  const [resultado, setResultado]=useState(null)
  const [erros, setErros]=useState({})

  const validar=()=>{
    const e={}
    if(!form.nome.trim()) e.nome='Informe seu nome'
    if(form.mensagem.trim().length<10) e.mensagem='Descreva com pelo menos 10 caracteres'
    if(!form.aceito) e.aceito='Aceite para continuar'
    setErros(e); return Object.keys(e).length===0
  }

  const handleSubmit=(ev)=>{
    ev.preventDefault()
    if(!validar()) return
    // Simula processamento + manipulação DOM
    const orientacoes={
      'Saúde mental':'Procure acolhimento: CAPS Pinheiro, CVV 188, respiração guiada na aba Recursos.',
      'Vacinação':'Verifique cartão vacinal no posto mais próximo - Unidade Central de Pinheiro.',
      'Alimentação':'Priorize alimentos in natura, 5 porções de frutas/verduras, beba 2L água.',
      'Atividade física':'150 min/semana moderado - caminhada na Praça do Centenário.'
    }
    setResultado({tema:form.tema, texto: orientacoes[form.tema]||'Orientação geral de autocuidado.', perfil:form.perfil})
  }

  return (
    <section className="section-pad bg-deep text-white">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <p className="section-label light">Triagem interativa • JS + Eventos</p>
            <h2 className="section-title">Encontre orientação por perfil e tema</h2>
            <p>Form com validação, estado React, preventDefault, feedback instantâneo e localStorage.</p>
            {resultado && (
              <div className="alert alert-light mt-3">
                <strong>Resultado para {resultado.perfil} - {resultado.tema}</strong>
                <p className="mb-0 small text-dark">{resultado.texto}</p>
              </div>
            )}
          </div>
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} noValidate className="support-form">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Seu nome</label>
                  <input className={`form-control ${erros.nome?'is-invalid':''}`} value={form.nome} onChange={e=>setForm({...form, nome:e.target.value})} />
                  {erros.nome && <div className="invalid-feedback d-block text-warning">{erros.nome}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Perfil</label>
                  <select className="form-select" value={form.perfil} onChange={e=>setForm({...form, perfil:e.target.value})}>
                    <option>Estudante</option><option>Familiar</option><option>Morador da comunidade</option><option>Profissional de apoio</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Tema</label>
                  <select className="form-select" value={form.tema} onChange={e=>setForm({...form, tema:e.target.value})}>
                    <option>Saúde mental</option><option>Vacinação</option><option>Alimentação</option><option>Atividade física</option>
                  </select>
                </div>
                <div className="col-md-6 d-flex align-items-end">
                  <div className="form-check"><input type="checkbox" className="form-check-input" checked={form.aceito} onChange={e=>setForm({...form, aceito:e.target.checked})} id="aceito" /><label htmlFor="aceito" className="form-check-label small">Concordo com uso educativo dos dados</label></div>
                </div>
                <div className="col-12">
                  <label className="form-label">Descreva sua necessidade</label>
                  <textarea className={`form-control ${erros.mensagem?'is-invalid':''}`} rows="3" value={form.mensagem} onChange={e=>setForm({...form, mensagem:e.target.value})} placeholder="Ex.: ansiedade antes das provas"></textarea>
                  {erros.mensagem && <div className="invalid-feedback d-block text-warning">{erros.mensagem}</div>}
                  {erros.aceito && <div className="small text-warning mt-1">{erros.aceito}</div>}
                </div>
                <div className="col-12 d-flex gap-2">
                  <button className="btn btn-light" type="submit"><i className="bi bi-send me-2"></i>Simular consulta</button>
                  <button type="button" className="btn btn-outline-light" onClick={()=>{setForm({perfil:'Estudante', tema:'Saúde mental', mensagem:'', nome:'', aceito:false}); setResultado(null); setErros({})}}>Limpar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
