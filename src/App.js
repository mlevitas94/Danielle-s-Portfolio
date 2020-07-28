import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Landing from './Components/Landing/Landing'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import AboutBackground from './assets/DSC_0175.jpg'
import AboutPortrait from './Components/About/assets/portrait.jpg'
import LandingBackground from './assets/landing_image.jpeg'
import ContactBackground from './assets/tree.jpg'
import ProjectsBackground from './assets/park.jpg'
import Axios from 'axios';



function App() {
  const [assets, setAssets] = useState({ images: 0, projects: false })
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedType, setType] = useState('')

  useEffect(() => {
    document.querySelector('.lds-ring').style.opacity = '1'
    document.querySelector('.lds-ring').style.transform = 'translate(0px, 0px) scale(1.3)'
    Axios.get('/getprojects/').then(res => {
      setAssets((prevState) => { return { ...prevState, projects: true } })
      setProjects(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="App">
      <div id='preload'>
        <img src={LandingBackground} onLoad={() => {
          setAssets((prevState) => {return {...prevState, images : prevState.images + 1}})}}  alt='preload' />
        <img src={AboutBackground} onLoad={() => {
          setAssets((prevState) => {return {...prevState, images : prevState.images + 1}})}} alt='preload' />
        <img src={AboutPortrait} onLoad={() => {
          setAssets((prevState) => {return {...prevState, images : prevState.images + 1}})}} alt='preload' />
        <img src={ContactBackground} onLoad={() => {
          setAssets((prevState) => {return {...prevState, images : prevState.images + 1}})}} alt='preload' />
        <img src={ProjectsBackground} onLoad={() => {
          setAssets((prevState) => {return {...prevState, images : prevState.images + 1}})}} alt='preload' />

      </div>
      {
        assets.images === 5 && assets.projects === true ?
          <>
            <Route render={({ location }) => (

              <TransitionGroup>
                <CSSTransition timeout={600} classNames='fade' key={location.key}>
                  <Switch location={location}>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route path='/projects' component={() => <Projects selectedType={selectedType} setType={setType} projects={projects} setProjects={setProjects} selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>}/>
                    <Route render={() => {
                      return (
                        <div className='invalidPage'><p>Cannot find page</p></div>
                      )
                    }}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>

            )} />
          </>
          :
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      }
    </div>
  );
}

export default App;
