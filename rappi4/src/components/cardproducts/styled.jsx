import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'

export const ButtonDiv = styled.div`
    position: relative;
    left: 55%;
    top: 15%;
    display: flex;
    flex-direction: column;
`

export const ButtonQuantity = styled.button`
    position: relative;
    bottom: 30px;
    left: 90px;
`

export const ButtonAdd = styled.button`
    border: 1px solid black;
    background-color: transparent;
    padding: 10px 20px;
    border-radius: 10px 0 10px 0;
`

export const ButtonRemove = styled.button`
    border: 1px solid ${primaryColor};
    background-color: transparent;
    padding: 10px 20px;
    border-radius: 10px 0 10px 0;
    color: ${primaryColor}
`