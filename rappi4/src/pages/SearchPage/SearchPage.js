import React from 'react'
import RecipeReviewCard from '../../components/cardfood/CardSearch'
import {DivForSearch, SearchText, DivSearchText, DivShadow, BackButton, BackIcon} from './styled'
import {SearchBar} from '../../components/barraBusca/SearchBar'
import {TabMenu} from '../../components/menutab/TabMenu'
import Back from "../../assets/back.png"
import styled from 'styled-components'


export const SearchPage = () => {
    return (
        <div>  
            
            <DivSearchText> 
               <BackButton><BackIcon src={Back}/></BackButton>
                <SearchText>Busca</SearchText>
            </DivSearchText> 
            <SearchBar/> 
            <DivForSearch>
                <DivShadow>
                <RecipeReviewCard/>
                </DivShadow>
                <DivShadow>
                <RecipeReviewCard/>
                </DivShadow>
                <DivShadow>
                <RecipeReviewCard/>
                </DivShadow>
                <DivShadow>
                <RecipeReviewCard/>
                </DivShadow>
            </DivForSearch>
            <TabMenu/>
        </div>
    )
}