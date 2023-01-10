import "./styles/App.css";
import DadosContext from "./assets/shared/context/ContextApp";
import RoutesApp from "./assets/shared/routes";

function App() {
  return (
    <DadosContext>
      <RoutesApp />
    </DadosContext>
  );
}

export default App;
