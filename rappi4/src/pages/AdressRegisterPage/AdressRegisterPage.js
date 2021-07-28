import React from 'react'
import { MainContainer, TextP } from './styled'
import {AdressRegisterForm} from './AdressRegisterForm'

export const AdressRegisterPage = () => {
    return (
        <MainContainer>
            <TextP>Meu Endereço</TextP>
            <AdressRegisterForm/>
        </MainContainer>
    )
}