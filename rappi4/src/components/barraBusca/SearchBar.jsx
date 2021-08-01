import React from 'react'
import { IconButton, Paper, InputBase, BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { MainContainer } from './Styled'

export const SearchBar = () => {
    return (
        <div>
            <MainContainer>
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
            </MainContainer>
        </div>
    )
}