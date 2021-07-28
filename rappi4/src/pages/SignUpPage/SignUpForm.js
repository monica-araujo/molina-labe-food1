import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {InputContainer} from './styled'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment'

export const SingUpForm = () => {

    return (
        <InputContainer>
            <form /*onSubmit={onSubmitForm}*/>
                <TextField
                    name={'name'}
                    //value={''}
                    //onChange={onChange}
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
                    //value={''}
                    //onChange={onChange}
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
                    name={'cpf'}
                    //value={form.password}
                    //onChange={onChange}
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
                />
                <TextField
                    name={'password'}
                    //value={form.password}
                    //onChange={onChange}
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
                <TextField
                    name={'password'}
                    //value={form.password}
                    //onChange={onChange}
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
                />
                <Button 
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                    margin={'normal'}
                >
                    {/*{ ? <CircularProgress color={'inherit'} size={24}/> : <>*/}Criar
                    </Button>
            </form>
        </InputContainer>
    )
}