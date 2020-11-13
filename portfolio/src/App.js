import React from 'react'

import styled from 'styled-components'

import Header from './components/Header/Header'
import WhoIAm from './components/WhoIAm/WhoIAm'
import AboutMe from './components/AboutMe/AboutMe'
import MyKnowledge from './components/MyKnowledge/MyKnowledge'
import Education from './components/Education/Education'
import MyProjects from './components/MyProjects/MyProjects'
import HireMe from './components/HireMe/HireMe'
import Footer from './components/Footer/Footer'

const ContainerApp = styled.div`
  scroll-behavior: smooth;
`

function App() {
  return (
    <ContainerApp>
      <Header />
      <WhoIAm />
      <AboutMe />
      <MyKnowledge />
      <Education />
      <MyProjects />
      <HireMe />
      <Footer />
    </ContainerApp>
  )
}

export default App