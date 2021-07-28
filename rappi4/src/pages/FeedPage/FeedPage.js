import { IconButton, Paper, InputBase, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import React from 'react'
import { MainContainer, TextP, InputContainer, MenuTab, HeaderContainer } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import homeVermelho from '../../assets/pagina-inicial-vermelho.png'
import cart from '../../assets/shopping-cart.png'
import profile from '../../assets/user.png'

export const FeedPage = () => {
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