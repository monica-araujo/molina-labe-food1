import axios from 'axios'
import { BASE_URL } from '../constants/urls'


export const postPlaceOrder = (restaurantID, body) => {

    const axiosConfig = {
        headers: {
            auth: localStorage.getItem("token")
        }
      }

    
   
    axios
    .post(`${BASE_URL}/restaurants/${restaurantID}/order`, body, axiosConfig)
    .then((res) => {
        alert('Pedido realizado com sucesso!')
        return console.log(res.data)
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}