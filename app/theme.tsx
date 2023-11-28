import { createTheme } from "@mui/material"

const theme = createTheme({
    typography: {
        fontFamily: 'inherit',
    },
    palette: {
        primary: {
            main: '#fa8021'
        },
        secondary: {
            main: '#ededed',
            dark: '#a1a1a1'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 20
              } 
            }
        }
    }
})

export default theme;