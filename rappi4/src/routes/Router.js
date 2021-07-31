import { SplashScreen } from '../pages/SplashScreen/SplashScreen'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { SignUpPage } from '../pages/SignUpPage/SignUpPage'
import { AdressRegisterPage } from '../pages/AdressRegisterPage/AdressRegisterPage'
import { FeedPage } from '../pages/FeedPage/FeedPage'
import { SearchPage } from '../pages/SearchPage/SearchPage'
import { RestaurantsPage } from '../pages/RestaurantsPage/RestaurantsPage'
import { CartPage } from '../pages/CartPage/CartPage'
import { ProfilePage } from '../pages/ProfilePage/ProfilePage'
import { EditProfilePage } from '../pages/EditProfilePage/EditProfilePage'
import { EditAdressPage } from '../pages/EditAdressPage/EditAdressPage'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'


import { BrowserRouter, Switch, Route } from "react-router-dom"


export const Router = () => {

    

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/registro"}>
                    <SignUpPage />
                </Route>

                <Route exact path={"/registro-endereco"}>
                    <AdressRegisterPage />
                </Route>

                <Route exact path={"/"}>
                    <FeedPage />
                </Route>

                <Route exact path={"/busca"}>
                    <SearchPage />
                </Route>

                <Route exact path={"/restaurante/:restaurantId"}>
                    <RestaurantsPage />
                </Route>

                <Route exact path={"/carrinho"}>
                    <CartPage />
                </Route>

                <Route exact path={"/perfil"}>
                    <ProfilePage />
                </Route>

                <Route exact path={"/editar-perfil"}>
                    <EditProfilePage />
                </Route>

                <Route exact path={"/editar-endereco"}>
                    <EditAdressPage />
                </Route>

                <Route exact path={"/erro"}>
                    <ErrorPage />
                </Route>                
            
            </Switch>       
        </BrowserRouter>
    )
}