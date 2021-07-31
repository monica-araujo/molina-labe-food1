import React from 'react'
import {LoginForm} from './LoginForm'
import {MainContainer, SingUpButtonContainer, TextP, BackButton, BackIcon} from './styled'
import Button from '@material-ui/core/Button'
import Logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/coordinates'

export const LoginPage = () => {
    const history = useHistory()

    return (
        <MainContainer>
            <img src={Logo}/>
            <TextP>Entrar</TextP>
            <LoginForm/>
            <SingUpButtonContainer>
                <Button
                    onClick={() => goToSignUpPage(history)}
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