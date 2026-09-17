import Hero from '../components/Hero.jsx'
import Recursos from '../components/Recursos.jsx'
import DashboardAPI from '../components/DashboardAPI.jsx'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section-pad">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="ods-panel">
                <span className="ods-number">3</span>
                <h2>ODS 3: Saúde e Bem-Estar</h2>
                <p>
                  Assegurar uma vida saudável e promover o bem-estar para todas as pessoas,
                  em todas as idades.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <h2 className="section-title">
                Prevenção, autocuidado e acesso à orientação confiável.
              </h2>
              <ul>
                <li>
                  O projeto responde à dificuldade de muitas pessoas em encontrar orientações
                  simples sobre vacinação, saúde mental, alimentação, atividade física e serviços
                  de atendimento.
                </li>
                <li>
                  A proposta ajuda a encontrar informações confiáveis em um ambiente acessível e
                  fácil de entender.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Recursos />
      <DashboardAPI />
    </>
  )
}