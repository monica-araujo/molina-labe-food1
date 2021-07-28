import React from 'react'
import {MainContainer, SingUpButtonContainer, TextP, BackButton, BackIcon, HeaderContainer} from './styled'
import Button from '@material-ui/core/Button'
import Logo from '../../assets/logo.png'
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