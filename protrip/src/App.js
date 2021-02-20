import './App.css';
import HomeComponent from './components/HomeComponent';
import AddComponent from './components/AddComponent';
import ListComponent from './components/ListComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
    <Router><div><Header/></div>
    <div className="App">
     <Switch>
       <Route exact path="/" component={HomeComponent}/>
       <Route path="/AddComponent" component={AddComponent}/>
       <Route path="/ListComponent" component={ListComponent}/>
     </Switch>
     </div>
     </Router>
    </>
  );
}

export default App;
