export default async function getData()  {
    const res = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
  
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }