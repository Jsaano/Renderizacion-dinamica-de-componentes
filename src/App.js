import BaseColaboradores from './components/BaseColaboradores.json';
import { useState } from 'react';
import FormularioColaboradores from './components/FormularioColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const guardarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  
   const filter = (e) => {
    const search = e.target.value;
    const filtered = colaboradores.filter((colaborador) => {
      return colaborador.nombre.toLowerCase().includes(search.toLowerCase());
    });
    setColaboradores(filtered);
  };


return (
    <div className="App">
      <FormularioColaboradores guardarColaborador={guardarColaborador} />
      <input type="text" placeholder="Buscar" onChange={filter} />
      <ul>
        {colaboradores.map((colaborador) => (
          <li key={colaborador.id}>
            {colaborador.nombre} {colaborador.correo}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
