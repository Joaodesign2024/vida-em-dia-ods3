
import Hero from '../components/Hero.jsx'
import Recursos from '../components/Recursos.jsx'
import DashboardAPI from '../components/DashboardAPI.jsx'
export default function Home(){
  return (
    <>
      <Hero />
      <section className="section-pad">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5"><div className="ods-panel"><span className="ods-number">3</span><h2>ODS 3: Saúde e Bem-Estar</h2><p>De HTML estático para SPA interativa: componentização, useState, useEffect, eventos.</p></div></div>
            <div className="col-lg-7"><h2 className="section-title">Evolução da Nota 1 para Nota 2</h2><ul><li>Antes: HTML + CSS + Bootstrap estático</li><li>Agora: React, Router, componentes reutilizáveis, estado global via localStorage</li><li>Interatividade: filtros, busca, favoritos, IMC, respiração, triagem validada</li><li>API: 3 endpoints públicos com tratamento JSON e loading/error</li></ul></div>
          </div>
        </div>
      </section>
      <Recursos />
      <DashboardAPI />
    </>
  )
}
