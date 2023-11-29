export default async function getCep(cep: any) {
  const res: any = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data: any = await res.json();

  return data;
}
