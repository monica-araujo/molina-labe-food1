import { IconButton, Paper, InputBase, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import React from 'react'
import { MainContainer, TextP, TextCategory, InputContainer, MenuTab, HeaderContainer, TypeContainer } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import homeVermelho from '../../assets/pagina-inicial-vermelho.png'
import cart from '../../assets/shopping-cart.png'
import profile from '../../assets/user.png'
import RecipeReviewCard from '../../components/cardfood/CardSearch'
import useProtectedPage from '../../hooks/useProtected';
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { goToCartPage, goToFeed, goToProfilePage } from '../../routes/coordinates';
import { useHistory } from 'react-router-dom';



export const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const data = useRequestData([], `${BASE_URL}/restaurants`)
    const restaurants = data && data.restaurants

    return (
        <MainContainer>
            <HeaderContainer>
                <TextP>Rappi4</TextP>
            </HeaderContainer>
            <InputContainer>
                <Paper 
                    component="form" 
                    variant={"outlined"}
                    style={{ width: "90vw" }}

                >
                    <IconButton  >
                        <SearchIcon 
                            color={'tertiary'}
                        />
                    </IconButton>
                    <InputBase
                        placeholder="Restaurante"
                    />          
                </Paper>
                <TypeContainer>
                    {restaurants && restaurants.map((restaurant) => {
                    return (
                    <TextCategory>
                         {restaurant.category && restaurant.category}  
                    </TextCategory> )    
                    })}                    
                </TypeContainer>
                {restaurants && restaurants.map((restaurant, index) => {
                    return <RecipeReviewCard restaurant={restaurant} key={index}/>
                })}
                <MenuTab>     
                    <BottomNavigation
                        showLabels
                        >
                        <BottomNavigationAction onClick={() => goToFeed(history)} icon={<img src={homeVermelho} alt="" />}/>
                        <BottomNavigationAction onClick={() => goToCartPage(history)} icon={<img src={cart} alt="" />}/>
                        <BottomNavigationAction onClick={() => goToProfilePage(history)} icon={<img src={profile} alt="" />}/>
                    </BottomNavigation>
                </MenuTab>
                
            </InputContainer>
                
        </MainContainer>
    )
}