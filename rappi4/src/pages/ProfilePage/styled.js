import styled from 'styled-components'
import {  tertiaryColor } from '../../constants/colors'

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
    margin-bottom: 5px;
    padding: 0 15px;
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

export const ContainerProfile = styled.div`
    display: grid;
    grid-template-columns: 1fr 10%;
    width: 100vw;
    margin-top: 15px;

`
export const ContainerAdress = styled.div`
    display: grid;
    grid-template-columns: 1fr 10%;
    width: 100vw;
    padding: 15px 0;
    background-color: ${tertiaryColor};
`
