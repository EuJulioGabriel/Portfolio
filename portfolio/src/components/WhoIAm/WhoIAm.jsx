import React from 'react'

import Linkedin from '../../images/Linkedin.png'
import GitHub from '../../images/GitHub.png'
import Whatsapp from '../../images/Whatsapp.png'
import Profile from '../../images/Profile.svg'

import { ContainerWhoIAm, ProfileImage, ContainerTextWhoIAm, ContainerSocialMedia, 
         LogoSocialMedia, TextWhoIAm, TextAtuation, TextBio, ContainerContentWhoIAm } from './StyleWhoIAm'

function WhoIAm() {
    return (
        <ContainerWhoIAm id="whoiam">
            <ProfileImage src={Profile}></ProfileImage>
            <ContainerContentWhoIAm>
                <ContainerTextWhoIAm>
                    <TextWhoIAm>Eu sou <br /> Julio Gabriel </TextWhoIAm>
                    <TextAtuation>Desenvolvedor Web Full Stack</TextAtuation>
                    <TextBio>Apaixonado por tecnologia e programação</TextBio>
                </ContainerTextWhoIAm>
                <ContainerSocialMedia>
                    <a href="https://www.linkedin.com/in/eujuliogabriel/" target="_blank" rel="noreferrer noopener">
                        <LogoSocialMedia src={Linkedin}></LogoSocialMedia>
                    </a>
                    <a href="https://github.com/EuJulioGabriel" target="_blank" rel="noreferrer noopener">
                        <LogoSocialMedia src={GitHub}></LogoSocialMedia>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5548996825804" target="_blank" rel="noreferrer noopener">
                        <LogoSocialMedia src={Whatsapp}></LogoSocialMedia>
                    </a>
                </ContainerSocialMedia>
            </ContainerContentWhoIAm>
        </ContainerWhoIAm>
    )
}

export default WhoIAm