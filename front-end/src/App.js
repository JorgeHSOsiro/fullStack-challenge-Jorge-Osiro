import { Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Main from './pages/Main';
import './App.scss'
import EscolaDetalhes from './pages/EscolaDetalhes';
import FormNovaEscola from './pages/FormNovaEscola';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/detalhes-escola' component={ EscolaDetalhes } />
          <Route exact path='/new-school' component={ FormNovaEscola } />
        </Switch>
    </div>
  );
}

export default App;
