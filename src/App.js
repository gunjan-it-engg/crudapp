import "./App.css";
import AddUser from "./components/adduser";
import AllUsers from "./components/allusers";
import Crud from "./components/crud";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditUser from "./components/EditUser";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/add" component={AddUser}></Route>
          <Route exact path="/" component={Crud}></Route>
          <Route exact path="/all" component={AllUsers}></Route>
          <Route exact path="/edit/:id" component={EditUser}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
