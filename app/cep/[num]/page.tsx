export async function getCEP(cep: any) {
  const res: any = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data: any = await res.json();

  return data.logradouro;
}

export default async function Page({ params }: { params: { num: string } }) {
  const cep = await getCEP(params.num);

  console.log(cep);

  return <div>Endereço: {cep}</div>;
}
