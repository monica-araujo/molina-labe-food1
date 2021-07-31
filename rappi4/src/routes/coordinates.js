export const goToLoginPage = (history) => {
    history.push('./login')
}

export const goToSignUpPage = (history) => {
    history.push('./registro')
}

export const goToAdressRegisterPage = (history) => {
    history.push('./registro-endereco')
}

export const goToFeed = (history) => {
    history.push('/')
}

export const goToSearchPage = (history) => {
    history.push('./busca')
}

/* export const goToRestaurantsPage = (history, id) => {
    history.push(`./restaurante/${id}`)
}
 */
export const goToCartPage = (history) => {
    history.push('./carrinho')
}

export const goToProfilePage = (history) => {
    history.push('./perfil')
}

export const goToEditProfilePage = (history) => {
    history.push('./editar-perfil')
}

export const goToEditAdressPage = (history) => {
    history.push('./editar-endereco')
}



