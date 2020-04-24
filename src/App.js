import React from 'react';
import { Switch, Route } from "react-router-dom";
import Landing from './Components/Landing/Landing'
import About from './Components/About/About';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


function App() {
  return (
    <div className="App">
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition timeout={500} classNames='fade' key={location.key}>
            <Switch location={location}>
              <Route exact path='/' component={Landing} />
              <Route exact path='/about' component={About} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
