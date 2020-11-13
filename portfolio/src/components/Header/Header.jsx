import React, { useState } from 'react'

import { ContainerHeader, Name, Section, NavBar, Link } from './StyleHeader'

function Header() {
  const [location, setLocation] = useState("")

  const onClickLocation = (pageSelected) => {
    setLocation(pageSelected)
  }

  return (
    <ContainerHeader>
      <Name>Julio Gabriel</Name>
      <NavBar>
          <Link href="#whoiam" onClick={() => onClickLocation("#whoiam")}>
            <Section color={location === "#whoiam" ? "#8d1c31" : "#063447"}>
              quem sou
            </Section>
          </Link>
          <Link href="#myprojects" onClick={() => onClickLocation("#myprojects")}>
            <Section color={location === "#myprojects" ? "#8d1c31" : "#063447"}>
              projetos
            </Section>
          </Link>
          <Link href="#contact" onClick={() => onClickLocation("#contact")}>
            <Section color={location === "#contact" ? "#8d1c31" : "#063447"}>
              contato
            </Section>
          </Link>
      </NavBar>
    </ContainerHeader>
  )
}

export default Header