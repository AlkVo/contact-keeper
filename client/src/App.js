import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/layout/Home';
import About from './components/layout/About';
import ContactState from './context/contact/contactState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AlterState from './context/alter/AlterState';
import Alter from './components/layout/Alters';
const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlterState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alter />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlterState>
      </ContactState>
    </AuthState>
  );
};

export default App;
