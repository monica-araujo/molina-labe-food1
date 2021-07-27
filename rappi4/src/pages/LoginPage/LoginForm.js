import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {InputContainer} from './styled'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment'

export const LoginForm = () => {
    return (
        <InputContainer>
            <form /*onSubmit={onSubmitForm}*/>
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
                <Button 
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                    margin={'normal'}
                >
                    {/*{ ? <CircularProgress color={'inherit'} size={24}/> : <>*/}Entrar
                    </Button>
            </form>
        </InputContainer>
    )
}