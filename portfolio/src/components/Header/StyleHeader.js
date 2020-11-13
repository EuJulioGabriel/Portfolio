import styled from 'styled-components'

export const ContainerHeader = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fffffb;
    position: sticky;
    top: 0;
`

export const Name = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 21px;
    color: #8d1c31;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    margin-left: 32px;
`

export const NavBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Section = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    color: ${props => props.color};
    margin-right: 32px;
    letter-spacing: -0.22px;
    :hover {
        color: #8d1a10;
        font-size: 20px;   
    }
`

export const Link = styled.a`
    text-decoration: none;
`