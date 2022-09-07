import { Route, Switch } from 'react-router-dom';
import AboutMe from './pages/About-me';
import Contacts from './pages/Contacts';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';

function App () {
  return (
    <Switch>
      <Route path='/about' component={AboutMe}/>
      <Route path='/projects' component={Projects} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/' component={Homepage}/>
    </Switch>
  )
}

export default App;
