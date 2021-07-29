import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {InputContainer} from './styled'
import InputMask from 'react-input-mask'

export const EditProfileForm = () => {

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
                <InputMask
                    mask="999.999.999-99"
                    //value={form.password}
                    //onChange={onChange}
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