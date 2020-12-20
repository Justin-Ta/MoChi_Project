import './App.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import './App.scss'
import { HomeTemplate } from './template/homeTemplate';
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs';
import Term from './Pages/Term';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';
import Detail from './Pages/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <HomeTemplate exact path="/" Component={Home} />
          <HomeTemplate exact path="/aboutus" Component={AboutUs} />
          <HomeTemplate exact path="/term" Component={Term} />
          <HomeTemplate exact path="/contact" Component={Contact} />
          <HomeTemplate exact path="/detail/:id" Component={Detail}/>
          <HomeTemplate exact path="*" Component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
