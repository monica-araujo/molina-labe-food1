import React from 'react'
import { MainContainer, TextP, HeaderContainer, BackButton, BackIcon } from './styled'
import {AdressRegisterForm} from './AdressRegisterForm'
import Back from "../../assets/back.png"

export const AdressRegisterPage = () => {
    return (
        <MainContainer>
            <HeaderContainer>
                <BackButton><BackIcon src={Back}/></BackButton>
            </HeaderContainer>
            <TextP>Meu Endereço</TextP>
            <AdressRegisterForm/>
        </MainContainer>
    )
}