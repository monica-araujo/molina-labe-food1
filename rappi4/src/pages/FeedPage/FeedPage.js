import { IconButton, Paper, InputBase, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import React from 'react'
import { MainContainer, TextP, InputContainer, MenuTab, HeaderContainer } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import homeVermelho from '../../assets/pagina-inicial-vermelho.png'
import cart from '../../assets/shopping-cart.png'
import profile from '../../assets/user.png'
import RecipeReviewCard from '../../components/cardfood/CardSearch'
import useProtectedPage from '../../hooks/useProtected';
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'


export const FeedPage = () => {
    useProtectedPage()
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
                {restaurants && restaurants.map((restaurant, index) => {
                    return <RecipeReviewCard restaurant={restaurant} key={index}/>
                })}
                <MenuTab>     
                    <BottomNavigation
                        showLabels
                        >
                        <BottomNavigationAction  icon={<img src={homeVermelho} alt="" />}/>
                        <BottomNavigationAction  icon={<img src={cart} alt="" />}/>
                        <BottomNavigationAction  icon={<img src={profile} alt="" />}/>
                    </BottomNavigation>
                </MenuTab>
                
            </InputContainer>
                
        </MainContainer>
    )
}