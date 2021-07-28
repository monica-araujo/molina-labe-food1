import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import React from 'react'
import { MenuTab } from './styled'
import homeVermelho from '../../assets/pagina-inicial-vermelho.png'
import cart from '../../assets/shopping-cart.png'
import profile from '../../assets/user.png'


export const TabMenu = () => {
    return(
    <div>
        <MenuTab>     
                    <BottomNavigation
                        showLabels
                        >
                        <BottomNavigationAction  icon={<img src={homeVermelho} alt="" />}/>
                        <BottomNavigationAction  icon={<img src={cart} alt="" />}/>
                        <BottomNavigationAction  icon={<img src={profile} alt="" />}/>
                    </BottomNavigation>
        </MenuTab>  
    </div>
    )
} 