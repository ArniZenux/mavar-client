import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import './utils/CSS/Bootstrap.css';
import './utils/CSS/App.css';


import { Layout } from './components/Layout/Layout';
import { Index } from './pages/home';

import { Tulkur } from './pages/tulkur';
import { NewTulkur } from './pages/newTulkur';
import { UpdateTulkur } from './pages/updateTulkur';
import { ChangeTulkur } from './pages/changeTulkur';
import { ProjectTulkur } from './pages/projectTulkur';
import { SkodaVerkTulkur } from './pages/skodaverkefniTulkur';

import { Verkefni } from './pages/verkefni';
import { Verkefniupdate } from './pages/updateVerkefni';
import { VerkefniUpdatepage } from './pages/updatePageVerkefni';
import { Verkefnidelete } from './pages/deleteVerkefni';

function App() {
  return (
    <Layout footer="">
      <Switch>
        <Route exact path="/"> <Index /> </Route>
       
        <Route exact path="/tulkur"> <Tulkur /> </Route>
        <Route exact path="/tulkurproject"> <ProjectTulkur /> </Route>
        <Route exact path="/tulkurnew"> <NewTulkur /> </Route>
        <Route exact path="/tulkurupdate"> <UpdateTulkur /> </Route>
        <Route exact path="/tulkurskoda"> <SkodaVerkTulkur /> </Route>
        <Route exact path="/skiptatulk"> <ChangeTulkur /> </Route>
       
        <Route exact path="/verkefni"> <Verkefni /> </Route>
        <Route exact path="/updateverkefni"> <Verkefniupdate /> </Route>
        <Route exact path="/updatePageVerkefni"> <VerkefniUpdatepage /> </Route>
        <Route exact path="/deleteverkefni"> <Verkefnidelete /> </Route>
       
       
       
      </Switch>
    </Layout>
  );
}

export default App;
