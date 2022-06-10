import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import './utils/CSS/App.css';

import { Layout } from './components/Layout/Layout';
import { Index } from './pages/home';
import { Tulkur } from './pages/tulkur';
import { Verkefni } from './pages/verkefni';

function App() {
  return (
    <Layout footer="">
      <Switch>
        <Route exact path="/"> <Index /> </Route>
        <Route exact path="/tulkur"> <Tulkur /> </Route>
        <Route exact path="/verkefni"> <Verkefni /> </Route>
      </Switch>
    </Layout>
  );
}

export default App;
