import React from 'react'
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

    

    /* let categoryProducts = restaurantProducts && restaurantProducts.map((item) => {
        return item.category;
    })


    let arrayProducts = {
        category: {}
    }; 
  
    categoryProducts && categoryProducts.forEach((t) => {
        return arrayProducts.category[t] = restaurantProducts && restaurantProducts.filter((i)=>{
        return i.category === t;
    })
    }) 

    console.log(arrayProducts.category) */
    

    return (
        <MainContainer>
            <HeaderContainer>
                <TextP>Restaurante</TextP>
            </HeaderContainer>
            <CardRestaurant restaurant={restaurantDetails} />
            <Border>
                <TextBorder>Principais</TextBorder>
            </Border>
            {/* {arrayProducts && arrayProducts.category && arrayProducts.category.map(() => {
                return <TextP>Restaurante</TextP>
            })}   */}
            
            

            {restaurantProducts && restaurantProducts.map((products) => {
                return (<CardProducts products={products} key={products.id}/>)
            })}
            {/* <Border>
                <TextBorder>Bebidas</TextBorder>
            </Border> */}
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