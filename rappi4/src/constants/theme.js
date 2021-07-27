import {createTheme}  from '@material-ui/core/styles'
import { primaryColor, secundaryColor, tertiaryColor} from './colors'

const theme = createTheme ({
    typography: {
        button: {
          textTransform: 'none'
        }
    },
    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#000000'
        },
        secundary: {
            main: secundaryColor,
            contrastText: '#000000'
        },
        tertiary: {
            main: tertiaryColor,
            contrastText: '#000000'
        },
        text: {
            primary: '#000000'
        }
    }
})

export default theme