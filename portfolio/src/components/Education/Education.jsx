import React from 'react'

import { ContainerEducation, ContainerTextEducation, ContainerContentEducation, 
         TitleContainer, TitleEducation, TextContainer } from './StyleEducation'

function Education() {
    return (
        <ContainerEducation>
            <>
                <TitleEducation>Educação</TitleEducation>
            </>
            <ContainerTextEducation>
                <ContainerContentEducation>
                    <TitleContainer>Curso de Web Full Stack na Labenu</TitleContainer>
                    <TextContainer>
                        6 meses - 2020
                        <br /> <br />
                        O curso de Web Full Stack da Labenu com carga horária de 1040 horas ensina em Frontend: HTML, CSS, JavaScript e React.js 
                        e em Backend: Node.js, TypeScript, MySQL, AWS e Firebase e testes automatizados tanto em 
                        Frontend quanto em Backend com a Biblioteca Jest.  
                    </TextContainer>
                </ContainerContentEducation>
            </ContainerTextEducation>
        </ContainerEducation>
    )
}

export default Education