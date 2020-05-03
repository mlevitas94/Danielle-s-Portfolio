import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Landing from './Components/Landing/Landing'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import AboutBackground from './assets/DSC_0175.jpg'
import AboutPortrait from './Components/About/assets/portrait.jpg'
import LandingBackground from './assets/landing_image.jpeg'
import ContactBackground from './assets/DSC_1356.jpeg'


function App() {
  const [images, setImages] = useState(false)

  useEffect(() => {
    document.querySelector('.lds-ring').classList.add('lds-ring-transition')
    const imageAmount = document.querySelectorAll('#preload img').length
    setImages(imageAmount)
  },[])
  return (
    <div className="App">
      <div id='preload' onLoad={() => {setImages(true)}}>
        <img src={LandingBackground} alt='preload'/>
        <img src={AboutBackground} alt='preload'/>
        <img src={AboutPortrait} alt='preload'/>
        <img src={ContactBackground} alt='preload'/>

      </div>
      {
        images === true ?
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition timeout={600} classNames='fade' key={location.key}>
                <Switch location={location}>
                  <Route exact path='/' component={Landing} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/contact' component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          :
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      }
    </div>
  );
}

export default App;
