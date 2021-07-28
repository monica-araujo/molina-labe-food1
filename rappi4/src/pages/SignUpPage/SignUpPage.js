import React from 'react'
import { SingUpForm } from './SignUpForm'
import {MainContainer, SingUpButtonContainer, TextP} from './styled'
import Button from '@material-ui/core/Button'
import Logo from '../../assets/logo.png'

export const SignUpPage = () => {
    return (
        <MainContainer>
            <img src={Logo}/>
            <TextP>Cadastrar</TextP>
            <SingUpForm/>
        </MainContainer>
    )
    
}