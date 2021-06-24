import { Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Main from './pages/Main';
import './App.scss'
import EscolaDetalhes from './pages/EscolaDetalhes';
import FormNovaEscola from './pages/FormNovaEscola';
import EditSchool from './pages/EditSchool';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DirectorLoginForm from './pages/DirectorLoginForm'
import TeacherLoginForm from './pages/TeacherLoginForm';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/detalhes-escola/:id' component={ EscolaDetalhes } />
          <Route exact path='/new-school' component={ FormNovaEscola } />
          <Route exact path='/edit-school/:id' component={ EditSchool } />
          <Route exact path='/login' component={ LoginPage } />
          <Route exact path='/directorLogin' component={ DirectorLoginForm } />
          <Route exact path='/teacherLogin' component={ TeacherLoginForm } />
          <Route exact path='/register' component={ RegisterPage } />
        </Switch>
    </div>
  );
}

export default App;
