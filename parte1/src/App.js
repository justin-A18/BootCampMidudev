import './App.css';
import Mensaje  from "./mensaje.js";//Importando Componentes
import Description from './description.js';//Importando Componentes

const App = () => {
  //siempre cerrar las etiquetas
  //solo evalua valores que se puedan renderizar
  //No crear componentes dentro de otro componentes
  return (
    <div className="App">
      <Mensaje color="green" message='Estamos trabajando' />
      <Mensaje color="red" message='En un curso' />
      <Mensaje color="cyan" message='De React' />
      <Description />
    </div>
  );
}

export default App;
