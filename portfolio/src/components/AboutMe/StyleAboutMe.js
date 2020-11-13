import styled from 'styled-components'

export const ContainerAboutMe = styled.div`
    background-color: #063447;
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ContainerContentAboutMe = styled.div`
    width: 30vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const TitleAboutMe = styled.p`
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #ffffff;
` 

export const DescriptionAboutMe = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    color: #ffffff;
`

export const Qualifications = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;
`

export const Curriculum = styled.p`
    width: 10vw;
    height: 5vh;
    border-radius: 0.5vw;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #bf213e;
    text-align: center;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    text-align: center;
    color: #ffffff;
    letter-spacing: -0.28px;
    :hover {
        background-color: #8d1a10;
    }
`

export const Link = styled.a`
    text-decoration: none;
`

export const ProfileImage = styled.img`
    width: 20vw;
    height: 50vh;
`