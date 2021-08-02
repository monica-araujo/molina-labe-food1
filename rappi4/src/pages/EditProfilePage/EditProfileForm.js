import React, {useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {InputContainer} from './styled'
import InputMask from 'react-input-mask'
import { useHistory } from 'react-router-dom'
import { GetProfile, putProfile } from '../../services/user'
import useForm from '../../hooks/useForm'


export const EditProfileForm = () => {
    const history = useHistory()
    const [ profile, setProfile ] = useState()
    const oneProfile = profile && profile.user
    const [form, onChange, clear] = useForm({name: '', email: '', cpf: '', password: ''})


    useEffect(() => {
        GetProfile(setProfile)
    }, [])    


    const onSubmitForm = (event) => {
        event.preventDefault()
        putProfile(form, clear, history)
    }

    return (
        <InputContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    label={'Nome'}
                    placeholder={oneProfile.name}
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
                    placeholder={oneProfile.email}
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
                        placeholder={oneProfile.cpf}
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
                <Button 
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                    margin={'normal'}
                >
                    {/*{ ? <CircularProgress color={'inherit'} size={24}/> : <>*/}Salvar
                    </Button>
            </form>
        </InputContainer>
    )
}