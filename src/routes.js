import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sobre" component={About} />
        <Route path="/account" component={Home} />
        <Route path="/lista-de-desejos" component={About} />
        <Route path="/cartao-fidelidade" component={Home} />
        <Route path="/ajuda" component={About} />
      </Switch>
    </BrowserRouter>
  );
}