import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import {InputContainer} from './styled'
import InputMask from 'react-input-mask'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { PutAdress } from '../../services/user'

export const EditAdressForm = () => {
    const history = useHistory()

    const [form, onChange, clear] = useForm({street: '', number: null, neighbourhood: '', city: '', state: '', complement: ''})

    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        PutAdress(form, clear, history, setIsLoading)
    }
    return (
        <InputContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'street'}
                    value={form.street}
                    onChange={onChange}
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
                    value={form.number}
                    onChange={onChange}
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
                    value={form.complement}
                    onChange={onChange}
                    label={'Complemento'}
                    placeholder={'Apto / Bloco'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    type={'text'}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField
                    name={'neighbourhood'}
                    value={form.neighbourhood}
                    onChange={onChange}
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
                    value={form.city}
                    onChange={onChange}
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
                    value={form.state}
                    onChange={onChange}
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
                    {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Salvar</>}
                    </Button>
            </form>
        </InputContainer>
    )
}