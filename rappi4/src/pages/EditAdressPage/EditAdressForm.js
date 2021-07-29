import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {InputContainer} from './styled'
import InputMask from 'react-input-mask'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment'

export const EditAdressForm = () => {

    return (
        <InputContainer>
            <form /*onSubmit={onSubmitForm}*/>
                <TextField
                    name={'street'}
                    //value={''}
                    //onChange={onChange}
                    label={'Logadouro'}
                    placeholder={'Rua / Av.'}
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
                    name={'number'}
                    //value={''}
                    //onChange={onChange}
                    label={'Número'}
                    placeholder={'Número'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'number'}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField
                    name={'complement'}
                    //value={form.password}
                    //onChange={onChange}
                    label={'Complemento'}
                    placeholder={'Apto / Bloco'}
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
                    name={'neighbourhood'}
                    //value={form.password}
                    //onChange={onChange}
                    label={'Bairro'}
                    placeholder={'Bairro'}
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
                    name={'city'}
                    //value={form.password}
                    //onChange={onChange}
                    label={'Cidade'}
                    placeholder={'Cidade'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'text'}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <InputMask
                    mask="aa"
                    //value={form.password}
                    //onChange={onChange}
                >
                    {() => <TextField
                    name={'state'}
                    label={'Estado'}
                    placeholder={'Estado'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'text'}
                    InputLabelProps={{
                        shrink: true
                    }}
                    //inputProps={{ style: { textTransform: "uppercase" } }}
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