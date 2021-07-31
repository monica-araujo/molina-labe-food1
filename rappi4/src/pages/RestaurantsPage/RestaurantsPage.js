import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtected'
import { useRequestData } from '../../hooks/useRequestData'
import CardRestaurant from '../../components/cardrestaurant/CardRestaurant'
import { MainContainer, HeaderContainer, TextP, Border, TextBorder } from './styled'
import CardProducts from '../../components/cardproducts/CardProducts'

export const RestaurantsPage = () => {
    const params = useParams()
    const data = useRequestData([], `${BASE_URL}/restaurants/${params.restaurantId}`)
    useProtectedPage()

    const restaurantDetails = data && data.restaurant

    const restaurantProducts = restaurantDetails && restaurantDetails.products

    //const mainProducts = restaurantProducts && restaurantProducts.filter ((products) => {
        //return (products.category === "Refeição")
    //})

    //const drinks = restaurantProducts && restaurantProducts.filter ((products) => {
        //return (products.category === "Bebida")
    //})

    //const accompaniment = restaurantProducts && restaurantProducts.filter ((products) => {
        //return (products.category === "Acompanhamento")
    //})

    const productsRender = restaurantProducts && restaurantProducts.filter((products) => {
        return products
    })

    console.log(productsRender)
    

    return (
        <MainContainer>
            <HeaderContainer>
                <TextP>Restaurante</TextP>
            </HeaderContainer>
            <CardRestaurant restaurant={restaurantDetails}/>
            <Border>
                <TextBorder>Principais</TextBorder>
            </Border>
            {/*{mainProducts && mainProducts.map((products) => {
                return (<CardProducts products={products}/>)
            })}*/}
            <Border>
                <TextBorder>Bebidas</TextBorder>
            </Border>
            {/*{drinks && drinks.map((products) => {
                return (<CardProducts products={products}/>)
            })}
            <Border>
                <TextBorder>Acompanhamentos</TextBorder>
            </Border>
            {accompaniment && accompaniment.map((products) => {
                return (<CardProducts products={products}/>)
            })}*/}
        </MainContainer>
    )
}