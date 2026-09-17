
import Recursos from '../components/Recursos.jsx'
export default function RecursosPage(){
  return (
    <div className="pt-3">
      <Recursos />
      <div className="container pb-5">
        <div className="api-card">
          <h3 className="h6 fw-bold">Como foi implementado (para slide Desenvolvimento)</h3>
          <pre className="small bg-light p-3 rounded">useState para busca e categoria
useMemo para filtrar recursos (performance)
localStorage para favoritos persistirem
onChange/onClick/onSubmit = manipulação DOM via React
Eventos: input, select, submit, click
</pre>
        </div>
      </div>
    </div>
  )
}
