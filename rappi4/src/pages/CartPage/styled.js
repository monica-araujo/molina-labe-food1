import styled from 'styled-components'
import { tertiaryColor } from '../../constants/colors'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 3vh;
`

export const HeaderContainer = styled.div`
    border-bottom: 1px solid #b8b8b8;
    width: 100vw;
    margin-bottom: 1vh;
    display: flex;
    justify-content: center;
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

export const TypeContainer = styled.div`
    width: 100vw;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center                                 ;
`

export const TextCategory = styled.button`
    margin: 15px 30px 15px 20px;
    background-color: transparent;
    border: none;
`


