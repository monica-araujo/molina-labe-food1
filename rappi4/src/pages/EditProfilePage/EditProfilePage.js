import React from 'react'
import {MainContainer, TextP, BackButton, BackIcon, HeaderContainer} from './styled'
import Back from "../../assets/back.png"
import { EditProfileForm } from './EditProfileForm'

export const EditProfilePage = () => {
    

    return (
        <MainContainer>
            <HeaderContainer>
                <BackButton><BackIcon src={Back}/></BackButton>
                <TextP>Editar</TextP>
            </HeaderContainer>
            <EditProfileForm/>
        </MainContainer>
    )
}