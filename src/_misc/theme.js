import { createMuiTheme } from '@material-ui/core/styles'
import { APP_THEME } from './../_core-modules/_styles'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: `${APP_THEME.primary}`,
            light: `${APP_THEME.primary}`,
            dark: `${APP_THEME.primary}`,
        },
        secondary: {
            main: `${APP_THEME.secondary}`,
            light: `${APP_THEME.secondary}`,
            dark: `${APP_THEME.secondary}`,
        },
        error: {
            main: `${APP_THEME.error}`,
            light: `${APP_THEME.error}`,
            dark: `${APP_THEME.error}`,
        },
        background: {
            default: '#a7b5cc',
        },
    }
})
