import React from "react";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { useStateValue } from "./StateProvider";
import Login from "./Login";


function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ):(
        <div className="app_body">
          <Router>
          <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
          
        </div>
      )}
      
    </div>
  );
}

export default App;