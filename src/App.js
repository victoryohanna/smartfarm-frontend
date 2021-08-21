import {Route, Switch} from "react-router-dom"
//import './App.css';
import NavBar from "./components/header/NavBar"
import Main from "./components/Main"
import CropList from "./components/CropList"
import CropDetails from "./components/CropDetails"
import Login from "./components/header/Login"
import Admin from "./components/admin/dashboard"
function App() {
  return (
    <div className="App"> 
      <NavBar />
      <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/crops" component={CropList} />
      <Route exact path ="/crops/:slug" component={CropDetails} />
      <Route exact path="/login" component ={Login} />
      <Route exact path="/dashboard" component ={Admin} />
      </Switch>
    </div>
  );
}

export default App;
