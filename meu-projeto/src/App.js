import "./App.css";
import SayMyName from "./components/sayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const nome = "Maria";

  return (
    <div className="App">
      <SayMyName nome="Jorge" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Rodrigo"
        idade="28"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
