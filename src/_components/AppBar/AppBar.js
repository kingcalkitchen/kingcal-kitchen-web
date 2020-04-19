import React from 'react'
import clsx from 'clsx'
import { AppBar as APP_BAR, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { useStyles } from './styles'

export const AppBar = props => {
    const classes = useStyles()

    return (
        <APP_BAR
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: props.open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: props.open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>{props.title}</Typography>
            </Toolbar>
        </APP_BAR>
    )
}
