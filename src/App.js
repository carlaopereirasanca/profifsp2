
import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Area from "./componentes/Area/Area";

function App() {

  const areas = [
    {
      nome : 'Progr. Básica',
      corPrimaria : '#57c278',
      corSecundaria : '#d9f7e9'
    },
    {
      nome : 'Progr. Web',
      corPrimaria : '#82cffa',
      corSecundaria : '#e8f8ff'
    },
    {
      nome : 'Banco de Dados',
      corPrimaria : '#a6d157',
      corSecundaria : '#f0f8e2'
    },
    {
      nome : 'Diversos',
      corPrimaria : '#e06b69',
      corSecundaria : '#fde7e8'
    }
  ]

  // Criando uma lista só com os nomes das áreas:
  const listaAreas = areas.map(area => area.nome)

  // lista (array) de professores.
  // o valor inicial é um array vazio []
  const [professores, setProfessores] = useState( [] )

  const adicionaProf = (prof) => {
    // criando uma nova lista com o conteúdo anterior da lista.
    const listaNova = professores.slice();
    // adicionando o novo professor nesssa lista:
    listaNova.push(prof)
    // colocando a nova lista atualizada no estado:
    setProfessores( listaNova )
  }

  return (
    <div>
      <Banner />

      { /* passando a lista de nomes de áreas para o componente Formulario */ }
      <Formulario areas={listaAreas} aoProfCadastrado={prof => adicionaProf(prof)} />
      
      { areas.map(area => <Area key={area.nome} 
                                nome={area.nome} 
                                corPrimaria={area.corPrimaria}
                                corSecundaria={area.corSecundaria} />) }

    </div>
  );
}

export default App;

