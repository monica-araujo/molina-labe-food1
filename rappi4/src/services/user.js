import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToAdressRegisterPage, goToFeed, goToProfilePage } from '../routes/coordinates'

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

export const GetProfile = (setProfile) => {
    const axiosConfig = {
        headers: {
            auth: localStorage.getItem("token")
        }
      }
    axios
        .get(`${BASE_URL}/profile`, axiosConfig)
        .then((res) => {
            setProfile(res.data)
        })
        .catch((err) => {
            alert("Desculpe... Algum erro aconteceu revise os items e tente novamente")
        })
    }

    export const PutAdress = (body, clear, history) => {
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
            alert("Endereço cadastrado com sucesso!")
            goToProfilePage(history)
        })
        .catch((err) => {
            console.log(err)
            alert("Desculpe... Algum erro aconteceu revise os items e tente novamente")
        })
    }
export const putProfile = (body, clear, history) => {
    const axiosConfig = {
        headers: {
            auth: localStorage.getItem("token")
        }
      }
    axios
        .put(`${BASE_URL}/profile`, body, axiosConfig)
        .then((res) => {
            clear()
            alert("Perfil cadastrado com sucesso!")
            goToProfilePage(history)
        })
        .catch((err) => {
            alert("Desculpe... Algum erro aconteceu revise os items e tente novamente")
        })
    }
    