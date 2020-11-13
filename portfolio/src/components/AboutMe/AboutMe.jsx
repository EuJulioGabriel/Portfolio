import React from 'react'

import Profile from '../../images/Profile.png'

import { ContainerAboutMe, ContainerContentAboutMe, TitleAboutMe, 
         DescriptionAboutMe, Qualifications, Curriculum, Link, ProfileImage } from './StyleAboutMe'

function AboutMe() {
    return (
        <ContainerAboutMe>
            <ContainerContentAboutMe>
                <TitleAboutMe>Sobre Mim</TitleAboutMe>
                <DescriptionAboutMe>
                    Meu nome é Julio Gabriel, tenho 23 anos, tive meu primeiro contato com 
                    programação durante um curso Técnico em Mecatrônica na disciplina de Lógica de Programação 
                    em C e foi amor a primeira vista, foi então que decidi fazer a transição de carreira 
                    para desenvolvedor.
                </DescriptionAboutMe>
                <Qualifications>
                    ┃ HTML ┃ CSS ┃ JavaScript ┃ React.js ┃ Jest ┃ <br/>┃ TypeScript ┃ Node.js ┃ MySQL ┃ AWS ┃ FireBase ┃
                </Qualifications>
                <Link href="https://drive.google.com/u/1/uc?id=1autktgit9sSkiZQzDZTMuF6-6XWgf5h2&export=download">
                    <Curriculum>CV em PDF</Curriculum>
                </Link>
            </ContainerContentAboutMe>
            <div>
                <ProfileImage src={Profile} alt="My Avatar"></ProfileImage>
            </div>
        </ContainerAboutMe>
    )
}

export default AboutMe