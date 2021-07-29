import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {InputContainer} from './styled'
import InputMask from 'react-input-mask'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import {signUp} from '../../services/user'

export const SingUpForm = () => {

    const history = useHistory()

    const [form, onChange, clear] = useForm({name: '', email: '', cpf: '', password: ''})

    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setIsLoading)
    }

    return (
        <InputContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    label={'Nome'}
                    placeholder={'Nome e sobrenome'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'name'}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
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
                <InputMask
                    mask="999.999.999-99"
                    value={form.cpf}
                    onChange={onChange}
                >
                    {() => <TextField
                        name={'cpf'}
                        label={'CPF'}
                        placeholder={'000.000.000-00'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'text'}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />}
                </InputMask>
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
                {/* <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={'Confirmar'}
                    placeholder={'Confirme a senha anterior'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'password'}
                    InputLabelProps={{
                        shrink: true
                    }} 
                />*/}
                <Button 
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                    margin={'normal'}
                >
                    {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Criar</>}
                    </Button>
            </form>
        </InputContainer>
    )
}