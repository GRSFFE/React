import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/empresa">
          <Empresa />
        </Route>

        <Route path="/Contato">
          <Contato />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
