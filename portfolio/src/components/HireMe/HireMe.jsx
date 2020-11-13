import React from 'react'

import { LogoSocialMedia, ContainerHireMe, SectionTitle, Text, ContainerMediaSocial } from './StyleHireMe'

import Linkedin from '../../images/Linkedin.png'
import GitHub from '../../images/GitHub.png'
import Whatsapp from '../../images/Whatsapp.png'

function HireMe() {
    return (
        <ContainerHireMe id="contact">
            <SectionTitle>Contrate-me</SectionTitle>
            <Text>
                Procuro oportunidade de trabalho onde eu possa aprender,
                <br/>
                me desenvolver e evoluir na minha carreia profissional.
                <br/> <br/>
                E-mail para contato: juliogabriel@outlook.com.br <br />
                Celular: (48) 99682-5804
            </Text>
            <ContainerMediaSocial>
                <a href="https://www.linkedin.com/in/eujuliogabriel/">
                    <LogoSocialMedia src={Linkedin}></LogoSocialMedia>
                </a>
                <a href="https://github.com/EuJulioGabriel">
                    <LogoSocialMedia src={GitHub}></LogoSocialMedia>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5548996825804">
                    <LogoSocialMedia src={Whatsapp}></LogoSocialMedia>    
                </a>
            </ContainerMediaSocial>
        </ContainerHireMe>
    )
}

export default HireMe