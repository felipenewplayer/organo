import { useState } from 'react';
import Banner from './components/Banner/Banner';
import { Formulario } from './components/Formulario';
import Time from './components/Time';


function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FFF5d9',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }

  ]
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    console.log('deletando colaborador');
}
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => 
          <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar = {deletarColaborador}/>
        )}

    </div>
  );
}

export default App;
