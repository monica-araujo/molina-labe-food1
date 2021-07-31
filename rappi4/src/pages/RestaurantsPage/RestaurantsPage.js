import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtected'
import { useRequestData } from '../../hooks/useRequestData'
import CardRestaurant from '../../components/cardrestaurant/CardRestaurant'

export const RestaurantsPage = () => {
    const params = useParams()
    const data = useRequestData([], `${BASE_URL}/restaurants/${params.restaurantId}`)
    useProtectedPage()

    const restaurantDetails = data && data.restaurant

    console.log(restaurantDetails)

    return (
        <div>
         <CardRestaurant restaurant={restaurantDetails}/>
        </div>
    )
}