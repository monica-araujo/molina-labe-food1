import React from 'react'
import RecipeReviewCard from '../../components/CardSearch'
import {DivForSearch, SearchText} from './styled'

export const SearchPage = () => {
    return (
        <div>
            <SearchText>Busca</SearchText> <br/>

            <DivForSearch>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
            </DivForSearch>
        </div>
    )
}