import React from 'react';

import 'bulma/css/bulma.min.css';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { withTina } from 'tinacms';

import Home from './pages/Home.js';
import AddingTina from './pages/AddingTina.js';
import Forms from './pages/Forms.js';
import FormFields from './pages/FormFields.js';
import Blocks from './pages/Blocks.js';
import Inline from './pages/Inline.js';
import GlobalForms from './pages/GlobalForms.js';

import NavItem from "./components/Nav.js";
import { Container, Columns, Column } from 'bloomer';

function App() {
  return (
      <Router>
              <Container style={{
                  marginTop: 40,
                  paddingLeft: 40,
                  paddingRight: 40,
                  maxWidth: 1000
              }}>
                  <h1 className="title is-1"><Link to="/" className="has-text-black">TinaCMS Basics</Link></h1>
              <Columns>
                  <Column isSize='3/4'>
                      <Switch>
                          <Route path="/adding-tina" component={AddingTina} />
                          <Route path="/forms" component={Forms} />
                          <Route path="/form-fields" component={FormFields} />
                          <Route path="/blocks" component={Blocks} />
                          <Route path="/inline" component={Inline} />
                          <Route path="/global-forms" component={GlobalForms} />
                          <Route exact path="/" component={Home} />
                      </Switch>
                  </Column>

                  <Column isSize='1/4'>
                      <ol>
                          <NavItem to="/adding-tina"><li>Adding Tina</li></NavItem>
                          <NavItem to="/forms"><li>Forms</li></NavItem>
                          <NavItem to="/form-fields"><li>Form Fields</li></NavItem>
                          <NavItem to="/blocks"><li>Blocks</li></NavItem>
                          <NavItem to="/inline"><li>Inline Editing</li></NavItem>
                          <NavItem to="/global-forms"><li>Global Forms</li></NavItem>
                      </ol>
                  </Column>
              </Columns>
              </Container>
      </Router>
  );
}

const tinaConfig = {
    sidebar: {
        position: "displace",
        hidden: false
    }
};

export default withTina(App, tinaConfig);
