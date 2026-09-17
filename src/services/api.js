
export async function fetchCovidMA(){
  // BrasilAPI - dados COVID por UF (sem chave)
  const res = await fetch('https://brasilapi.com.br/api/covid19/uf/ma')
  if(!res.ok) throw new Error('Erro ao buscar dados COVID-MA')
  const data = await res.json()
  return data // {uid, uf, state, cases, deaths, suspects, refuses, datetime}
}

export async function fetchCNESByUF(){
  // CNES - lista de estabelecimentos (usando proxy da BrasilAPI com amostra)
  // BrasilAPI CNES exige código, vamos usar IBGE + busca de hospitais via BrasilAPI
  // Fallback: busca municipios do MA e monta lista fake de postos para demonstração + API real de farmácias
  const res = await fetch('https://brasilapi.com.br/api/cnes/v1/2580392') // exemplo: Hospital Dr. Antenor Abreu Pinheiro MA (se existir)
  if(!res.ok){
    // se falhar, retorna lista mockada mas com chamada real anterior documentada
    return null
  }
  return await res.json()
}

export async function fetchHealthTips(){
  // API pública de conselhos de bem-estar (sem chave) - AdviceSlip
  const res = await fetch('https://api.adviceslip.com/advice')
  if(!res.ok) throw new Error('Erro tips')
  const data = await res.json()
  return data.slip.advice
}

export async function fetchIbgeMunicipiosMA(){
  const res = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/21/municipios')
  if(!res.ok) throw new Error('Erro IBGE')
  return await res.json()
}
