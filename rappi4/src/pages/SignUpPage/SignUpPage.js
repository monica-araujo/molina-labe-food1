import React from 'react'
import { SingUpForm } from './SignUpForm'
import {MainContainer, SingUpButtonContainer, TextP, BackButton, BackIcon, HeaderContainer} from './styled'
import Button from '@material-ui/core/Button'
import Logo from '../../assets/logo.png'
import Back from "../../assets/back.png"
import { Link } from 'react-router-dom'

export const SignUpPage = () => {
    return (
        <MainContainer>
            <HeaderContainer>
                <Link to="/login"><BackIcon src={Back}/></Link>
            </HeaderContainer>
            <img src={Logo}/>
            <TextP>Cadastrar</TextP>
            <SingUpForm/>
        </MainContainer>
    )
    
}