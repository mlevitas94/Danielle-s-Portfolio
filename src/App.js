import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Landing from './Components/Landing/Landing'
import About from './Components/About/About';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import AboutBackground from './assets/DSC_0175.jpg'
import AboutPortrait from './Components/About/assets/portrait.jpg'
import LandingBackground from './assets/landing_image.jpeg'


function App() {
  const [images, setImages] = useState(null)

  useEffect(() => {
    const imageAmount = document.querySelectorAll('#preload img').length
    setImages(imageAmount)
  },[])
  console.log(images)
  return (
    <div className="App">
      <div id='preload'>
        <img src={LandingBackground} alt='preload' onLoad={() => {setImages(prev => prev - 1)}}/>
        <img src={AboutBackground} alt='preload' onLoad={() => {setImages(prev => prev - 1)}}/>
        <img src={AboutPortrait} alt='preload' onLoad={() => {setImages(prev => prev - 1)}}/>
      </div>
      {
        images === 0 ?
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition timeout={600} classNames='fade' key={location.key}>
                <Switch location={location}>
                  <Route exact path='/' component={Landing} />
                  <Route exact path='/about' component={About} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          :
          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      }
    </div>
  );
}

export default App;
