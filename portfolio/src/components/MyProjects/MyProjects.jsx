import React from 'react'

import { ContainerMyProjects, CardProject, DescriptionProject, 
         TitleSection, TitleProject, Stack, ContainerContentCard, 
         Project, MoreProjects, Link, ContainerLinks, ProjectFullStack, 
         ImageProjects, TitleProjectBack, StackBack, DescriptionProjectBack, 
         ProjectBack, TitleProjectFullStack, StackFullStack, DescriptionProjectFullStack 
       } from './StyleMyProjects'

import Imac from '../../images/Imac.png'
import Ipad from '../../images/Ipad.png'
import Macbook from '../../images/Macbook.png'

function MyProjects() {
    return (
        <ContainerMyProjects id="myprojects">
            <TitleSection>Meus Projetos</TitleSection>
            <CardProject>
                <ImageProjects src={Macbook}></ImageProjects>
                <ContainerContentCard>
                    <TitleProject>Astromatch</TitleProject>
                    <Stack>Front-end</Stack>
                    <DescriptionProject>
                        O Astromatch é um projeto que foi desenvolvido durante o curso de Web Full Stack da 
                        Labenu em que nos foi dado um design que tivemos que replicar e simula o comportamento 
                        do Tinder e tinha como objetivo revisar os Hooks useState() e useEffect() que foram os 
                        conteúdos daquela semana de aula.
                    </DescriptionProject>
                    <Link href="https://github.com/EuJulioGabriel/Astromatch" target="_blank" rel="noreferrer noopener">
                        <Project>Ver no GitHub</Project>
                    </Link>
                </ContainerContentCard>
            </CardProject>
            <CardProject>
                <ImageProjects src={Ipad}></ImageProjects>
                <ContainerContentCard>
                    <TitleProjectBack>Labook</TitleProjectBack>
                    <StackBack>Back-end</StackBack>
                    <DescriptionProjectBack>
                        O Labook é um projeto de Backend que foi desenvolvido durante o curso de Web Full Stack 
                        da Labenu em que tivemos que simular o comportamento básico de uma rede social que possuí 
                        cadastro, login, fazer amizade, desfazer amizade, criar post, curtir post, descurtir post, 
                        criar comentário, feed de postagem e filtrar por tipo de post: post e evento.
                    </DescriptionProjectBack>
                    <Link href="https://github.com/EuJulioGabriel/Labook" target="_blank" rel="noreferrer noopener">
                        <ProjectBack>Ver no GitHub</ProjectBack>
                    </Link>
                </ContainerContentCard>
            </CardProject>
            <CardProject>
                <ImageProjects src={Imac}></ImageProjects>
                <ContainerContentCard>
                    <TitleProjectFullStack>LabeImage</TitleProjectFullStack>
                    <StackFullStack>Full Stack</StackFullStack>
                    <DescriptionProjectFullStack>
                        O LabeImage é um projeto Full Stack que foi desenvolvido durante o curso de Web Full 
                        Stack da Labenu em que tivemos que simular o comportamento básico de uma rede social 
                        de imagens que possuí: cadastro, login, postar a imagem, visualizar todas as suas 
                        imagens, visualizar uma imagem em específico, criar um álbum, adicionar uma imagem a 
                        um álbum, organizar imagem por: nome do usuário, dia que postou a imagem, álbum e tags. 
                        Visualizar todos os álbuns, visualizar todas as imagens de um álbum, atualizar capa de 
                        um álbum, seguir um usuário, deixar de seguir um usuário, ver um feed com as imagens 
                        que as pessoas que você segue postaram e ver um perfil de um usuário.
                    </DescriptionProjectFullStack>
                    <ContainerLinks>
                        <Link href="https://github.com/EuJulioGabriel/FrontEnd-LabeImage" target="_blank" rel="noreferrer noopener">
                            <ProjectFullStack>Front-end GitHub</ProjectFullStack>
                        </Link>
                        <Link href="https://github.com/EuJulioGabriel/BackEnd-LabeImage" target="_blank" rel="noreferrer noopener">
                            <ProjectFullStack>Back-end GitHub</ProjectFullStack>
                        </Link>
                    </ContainerLinks>
                </ContainerContentCard>
            </CardProject>
            <Link href="https://github.com/EuJulioGabriel?tab=repositories" target="_blank" rel="noreferrer noopener">
                <MoreProjects>Mais projetos</MoreProjects>
            </Link>
        </ContainerMyProjects>
    )
}

export default MyProjects