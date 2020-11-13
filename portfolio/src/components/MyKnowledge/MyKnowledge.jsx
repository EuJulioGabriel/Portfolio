import React from 'react'

import { ContainerMyKnowledge, ContainerTextKnowledge, ContainerFrontAndBack, 
         TitleContainer, TitleMyKnowledge, TextContainer } from './StyleMyKnowledge'

function MyKnowledge() {
    return (
        <ContainerMyKnowledge>
            <>
                <TitleMyKnowledge>Meus Conhecimentos</TitleMyKnowledge>
            </>
            <ContainerTextKnowledge>
                <ContainerFrontAndBack>
                    <TitleContainer>Front-end</TitleContainer>
                    <TextContainer>
                        Desenvolvimento de aplicações
                        web utilizando HTML, CSS e
                        JavaScript. 
                        <br /> <br />
                        Criação de sites responsivos
                        seguindo princípio de
                        Mobile First.
                    </TextContainer>
                </ContainerFrontAndBack>
                <ContainerFrontAndBack>
                    <TitleContainer>Back-end</TitleContainer>
                    <TextContainer>
                        Aplicações utilizando NodeJS,
                        Typescript e MySQL.
                        Criação de API´s para
                        comunicação com front-end
                        seguindo princípio de Clean Code.
                    </TextContainer>
                </ContainerFrontAndBack>
            </ContainerTextKnowledge>
        </ContainerMyKnowledge>
    )
}

export default MyKnowledge