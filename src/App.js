import './App.css';
import Sidebar from './componets/sidebar'
import Header from './componets/home/header'
import Periodo from './componets/home/information'
import SecaoPrincipal from './componets/cards'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="direita">
          <Header />
          <Periodo />

          <Switch>

            <Route exact path="/">

              <SecaoPrincipal />

            </Route>

          </Switch>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
