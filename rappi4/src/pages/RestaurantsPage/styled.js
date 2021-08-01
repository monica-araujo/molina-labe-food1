import styled from 'styled-components'
import { tertiaryColor } from '../../constants/colors'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 3vh;
`
export const BackIcon = styled.img`
    margin-right: 35.5vw;
    margin-left: 3.5vw;
    height: 2.9vh;
    margin-bottom: 1.5vh;
`
export const BackButton = styled.button`
    background-color: transparent;
    border: 0px;
    width: 14vw;
    margin-right: 30vw;
`
export const HeaderContainer = styled.div`
    border-bottom: 1px solid #b8b8b8;
    width: 100vw;
    margin-bottom: 1vh;
    display: flex;
`

export const TextBorder = styled.p`
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 5px;
`
export const Border = styled.div`
    border-bottom: 1px solid black;
    width: 90vw;
    margin-bottom: 1vh;
    display: flex;
    align-items: center;
    
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    align-items: center;
    margin-bottom: 20px;
`

export const MenuTab = styled.div`
    position: fixed;
    bottom: 0rem;
    width: 100vw;
    border-top: 1px solid ${tertiaryColor};
` 

export const TextP = styled.p`
    font-weight: 500;
    margin-bottom: 15px;
`

