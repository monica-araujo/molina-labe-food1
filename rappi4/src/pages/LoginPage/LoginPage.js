import React from 'react'
import {LoginForm} from './LoginForm'
import {MainContainer, SingUpButtonContainer, TextP, BackButton, BackIcon} from './styled'
import Button from '@material-ui/core/Button'
import Logo from '../../assets/logo.png'
import styled from 'styled-components'

export const LoginPage = () => {
    return (
        <MainContainer>
            <img src={Logo}/>
            <TextP>Entrar</TextP>
            <LoginForm/>
            <SingUpButtonContainer>
                <Button
                    //onClick={() => goToSignUpPage(history)}
                    type={'submit'}
                    fullWidth
                    variant={'text'}
                    color={'primary.main'}
                    margin={'normal'}
                    >
                    Não possui cadastro? Clique aqui.
                    </Button>
            </SingUpButtonContainer>
        </MainContainer>
    )
}