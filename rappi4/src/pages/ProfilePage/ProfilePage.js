import React, { useEffect, useState } from 'react'
import { MainContainer, TextP, InputContainer, MenuTab, HeaderContainer, ContainerProfile, ContainerAdress, TextBorder, Border } from './styled'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { goToAdressRegisterPage, goToCartPage, goToEditAdressPage, goToEditProfilePage, goToFeed, goToProfilePage } from '../../routes/coordinates';
import { useHistory } from 'react-router-dom';
import home from '../../assets/pagina-inicial.png'
import cart from '../../assets/shopping-cart.png'
import profileVermelho from '../../assets/user-vermelho.png'
import { GetProfile } from '../../services/user';
import EditIcon from '@material-ui/icons/Edit';

export const ProfilePage = () => {
    const history = useHistory()
    const [ profile, setProfile ] = useState()
    const oneProfile = profile && profile.user

    useEffect(() => {
        GetProfile(setProfile)
    }, [])      
    

    return (
        <div>
            <MainContainer>
                <HeaderContainer>
                    <TextP>Meu perfil</TextP>
                </HeaderContainer>
                <InputContainer>
                
                <ContainerProfile>
                    <div>
                        <TextP>{oneProfile && oneProfile.name}</TextP>
                        <TextP>{oneProfile && oneProfile.email}</TextP>
                        <TextP>{oneProfile && oneProfile.cpf}</TextP>
                    </div>
                    <div>
                        <button onClick={() => goToEditProfilePage(history)}><EditIcon /></button>
                    </div>
                </ContainerProfile>
                <ContainerAdress>
                    <div>
                        <TextP>Endereço cadastrado</TextP>
                        <TextP>{oneProfile && oneProfile.address}</TextP>
                    </div>
                    <div>
                        <button onClick={() => goToEditAdressPage(history)}><EditIcon /></button>
                    </div>
                </ContainerAdress>
                <Border>
                    <TextBorder>Histórico de pedidos</TextBorder>
                </Border>
                <MenuTab>     
                    <BottomNavigation
                        showLabels
                        >
                        <BottomNavigationAction 
                            onClick={() => goToFeed(history)}
                            icon={<img src={home} alt="" />}/>
                        <BottomNavigationAction 
                            onClick={() => goToCartPage(history)}
                            icon={<img src={cart} alt="" />}/>
                        <BottomNavigationAction 
                            onClick={() => goToProfilePage(history)}
                            icon={<img src={profileVermelho} alt="" />}/>
                    </BottomNavigation>
                </MenuTab>
                    
                </InputContainer>
                    
            </MainContainer>
        </div>
    )
}