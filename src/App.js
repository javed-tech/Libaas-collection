import {Switch,Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import './App.css';
import store from './store'
import Home from './components/Home';
import Nav from './components/Nav';
import Cart from './components/Cart';
import Details from './components/Details';
function App() {
  return (
    <>
    <Provider store={store}>
     <Nav/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/Cart"  component={Cart}/>
       <Route exact path="/details/:id" component={Details}/> 
     </Switch>
     </Provider>
    </>
  );
}

export default App;
