import React from 'react'
import RecipeReviewCard from '../../components/cardfood/CardSearch'
import {DivForSearch, SearchText, DivSearchText, DivShadow, Line} from './styled'
import {SearchBar} from '../../components/barraBusca/SearchBar'
import {TabMenu} from '../../components/menutab/TabMenu'


export const SearchPage = () => {
    return (
        <div>  
            
            <DivSearchText> 
                <SearchText>Buscar</SearchText>
            </DivSearchText> 
            <br/>
        <Line></Line>
            <SearchBar/> <br/>
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