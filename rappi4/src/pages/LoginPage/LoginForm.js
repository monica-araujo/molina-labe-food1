import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {InputContainer} from './styled'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import {login} from '../../services/user'

export const LoginForm = () => {

    const history = useHistory()

    const [form, onChange, clear] = useForm({email: '', password: ''})

    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setIsLoading)
    }

    return (
        <InputContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={'E-mail'}
                    placeholder={'email@email.com'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'email'}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha'}
                    placeholder={'Minímo 6 caracteres'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'password'}
                    InputLabelProps={{
                        shrink: true
                    }}
                    
                />
                <Button 
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                    margin={'normal'}
                >
                    {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Entrar</>}
                    </Button>
            </form>
        </InputContainer>
    )
}