import React from 'react'
import { MainContainer, TextP, InputContainer, MenuTab, HeaderContainer } from './styled'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { goToCartPage, goToFeed, goToProfilePage } from '../../routes/coordinates';
import { useHistory } from 'react-router-dom';
import home from '../../assets/pagina-inicial.png'
import cartVermelho from '../../assets/shopping-cart-vermelho.png'
import profile from '../../assets/user.png'

export const CartPage = () => {
    const history = useHistory()

    return (
        <div>
            <MainContainer>
                <HeaderContainer>
                    <TextP>Meu carrinho</TextP>
                </HeaderContainer>
                <InputContainer>
                    
                
                    <MenuTab>     
                        <BottomNavigation
                            showLabels
                            >
                            <BottomNavigationAction onClick={() => goToFeed(history)} icon={<img src={home} alt="" />}/>
                            <BottomNavigationAction onClick={() => goToCartPage(history)} icon={<img src={cartVermelho} alt="" />}/>
                            <BottomNavigationAction onClick={() => goToProfilePage(history)} icon={<img src={profile} alt="" />}/>
                        </BottomNavigation>
                    </MenuTab>
                    
                </InputContainer>
                    
            </MainContainer>
        </div>
    )
}