import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        getRestaurants()
    }, [])

    const getRestaurants = () => {
        const checkToken = localStorage.getItem('token')
        if(checkToken){
            axios.get(url, {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
                .then((res) => {
                    setData(res.data)
                    
                }).catch((err) => {
                    console.log(err)
                    alert('Ocorreu um erro =(')
                })
        }
        
    }

    return (data)
}