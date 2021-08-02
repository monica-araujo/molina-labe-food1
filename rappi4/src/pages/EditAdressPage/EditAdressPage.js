import React from 'react'
import { MainContainer, TextP, HeaderContainer, BackIcon } from './styled'
import {EditAdressForm} from './EditAdressForm'
import Back from "../../assets/back.png"
import { Link } from 'react-router-dom'

export const EditAdressPage = () => {
    return (
        <MainContainer>
            <HeaderContainer>
                <Link to="/perfil"><BackIcon src={Back}/></Link>
                <TextP>Endereço</TextP>
            </HeaderContainer>
            <EditAdressForm/>
        </MainContainer>
    )
}