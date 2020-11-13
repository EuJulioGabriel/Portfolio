import styled from 'styled-components'

export const ProfileImage = styled.img`
    width: 35%;
    height: 70vh;
`

export const LogoSocialMedia = styled.img`
    width: 2vw;
    :hover {
        width: 3vw;
    }
`

export const ContainerWhoIAm = styled.div`
    width: 100%;
    height: 70vh;
    background-color: #8d1c31;
    display: flex;
`

export const ContainerContentWhoIAm = styled.div`
    width: 70vw;
    height: 70vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ContainerTextWhoIAm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-self: center;
    margin-left: 10vw;
`

export const ContainerSocialMedia = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    justify-items: flex-start;
    margin-right: 1vw;
`

export const TextWhoIAm = styled.p`
    margin: 0;
    padding: 0;
    width: 30vw;
    letter-spacing: -0.29px;
    font-family: 'Montserrat', sans-serif;
    font-size: 50px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    color: #d97824;
`

export const TextAtuation = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #ffffff;
`

export const TextBio = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    color: #ffffff;
`