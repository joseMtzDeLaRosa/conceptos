import logo from "./logo.svg";
import "./App.css";

import Micomponente from "./Micomponente";
import SegundoComponente from './SegundoComponente';
import {TercerComponente}  from './TercerComponente';
import {EventosComponente} from './EventosComponente';

function App() {

  const ficha_medica = {
    altura: "168cm",
    grupo: "AB+",
    estado: "Bueno",
    Alergia: "Ninguna",
  };

  const numero = 1234;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p> texto </p>

        {/*cargar componentes */}
        <div className="Componentes">
          
          <hr />

          <Micomponente />
          <hr />
          <SegundoComponente />
          <hr />

          <TercerComponente nombre="jose" appel="mtz" ficha={ficha_medica} />
          <hr/>
          <EventosComponente/>

          <hr/>
        </div>
      </header>
    </div>
  );
}

export default App;
