import React from 'react'
import {MainContainer, TextP, BackIcon, HeaderContainer} from './styled'
import Back from "../../assets/back.png"
import { EditProfileForm } from './EditProfileForm'
import { Link } from 'react-router-dom'

export const EditProfilePage = () => {
    

    return (
        <MainContainer>
            <HeaderContainer>
                <Link to="/perfil"><BackIcon src={Back}/></Link>
                <TextP>Editar</TextP>
            </HeaderContainer>
            <EditProfileForm/>
        </MainContainer>
    )
}