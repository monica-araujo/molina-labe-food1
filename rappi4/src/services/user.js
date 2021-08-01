import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToAdressRegisterPage, goToFeed } from '../routes/coordinates'

export const login = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            setIsLoading(false)
            clear()
            if(res.data.user.hasAddress === true){
                goToFeed(history)
            }else{
                goToAdressRegisterPage(history)
            }
            console.log(res.data.user.hasAddress)
        })
        .catch((err) => {
            alert("Desculpe... Algum erro aconteceu revise os items e tente novamente")
        })
    }

export const signUp = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios
        .post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            setIsLoading(false)
            clear()
            goToAdressRegisterPage(history)
        })
        .catch((err) => {
            alert("Desculpe... Algum erro aconteceu revise os items e tente novamente")
        })
    }
export const addressSignUP = (body, clear, history, setIsLoading) => {
    const axiosConfig = {
        headers: {
            auth: localStorage.getItem("token")
        }
      }
    axios
    .put(`${BASE_URL}/address`, body, axiosConfig)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err) => {
        console.log(err)
        alert("Desculpe... Algum erro aconteceu revise os items e tente novamente")
    })
}

export const GetProfile = (setIsLoading) => {
    setIsLoading(true)
    const axiosConfig = {
        headers: {
            auth: localStorage.getItem("token")
        }
      }
    axios
        .get(`${BASE_URL}/profile`, axiosConfig)
        .then((res) => {
            console.log(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            alert("Desculpe... Algum erro aconteceu revise os items e tente novamente")
        })
    }