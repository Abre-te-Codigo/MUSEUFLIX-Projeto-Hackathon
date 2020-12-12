import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import LessonPlan from './pages/LessonPlan';

import Header from './components/Header'

const App = () => (

  <Router>

    <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/catalog">
              <Catalog />
            </Route>
            <Route path="/lessonplan">
              <LessonPlan />
            </Route>
          </Switch>

  </Router>
);

export default App;


/*


          
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to="/catalog">
              <Button>About</Button>
            </LinkContainer>
            <LinkContainer to="/lessonplan">
              <Button>Users</Button>
            </LinkContainer>
          </ButtonToolbar>


*/