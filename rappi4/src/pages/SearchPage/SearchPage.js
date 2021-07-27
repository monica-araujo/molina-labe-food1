import React from 'react'
import RecipeReviewCard from '../../components/CardSearch'
import {DivForSearch} from './styled'

export const SearchPage = () => {
    return (
        <div>
            <p>Busca</p> <br/>

            <DivForSearch>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
                <RecipeReviewCard/>
            </DivForSearch>
        </div>
    )
}