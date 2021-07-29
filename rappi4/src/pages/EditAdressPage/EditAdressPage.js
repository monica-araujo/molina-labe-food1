import React from 'react'
import { MainContainer, TextP, HeaderContainer, BackIcon, BackButton } from './styled'
import {EditAdressForm} from './EditAdressForm'
import Back from "../../assets/back.png"

export const EditAdressPage = () => {
    return (
        <MainContainer>
            <HeaderContainer>
                <BackButton><BackIcon src={Back}/></BackButton>
                <TextP>Endereço</TextP>
            </HeaderContainer>
            <EditAdressForm/>
        </MainContainer>
    )
}