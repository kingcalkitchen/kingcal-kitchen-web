import React from 'react'
import clsx from 'clsx'
import { withRouter } from "react-router"
import { useHistory } from "react-router-dom"
import { useTheme, withTheme } from '@material-ui/core/styles'

import { Drawer as DRAWER } from '@material-ui/core'
import List from '@material-ui/core/List'

import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import HomeIcon from '@material-ui/icons/Home'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import ChatIcon from '@material-ui/icons/Chat'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching'

import { useStyles } from './styles'

export const Drawer = withTheme(withRouter(props => {
    const history = useHistory()
    const theme = useTheme()
    const classes = useStyles()

    return (
        <DRAWER
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: props.open,
                [classes.drawerClose]: !props.open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={props.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button onClick={() => { history.push('home')}}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={() => { history.push('chat')}}>
                    <ListItemIcon><ChatIcon /></ListItemIcon>
                    <ListItemText primary="Chat" />
                </ListItem>
                <ListItem button onClick={() => { history.push('feed')}}>
                    <ListItemIcon><RssFeedIcon /></ListItemIcon>
                    <ListItemText primary="Feed" />
                </ListItem>
                <ListItem button onClick={() => { history.push('items')}}>
                    <ListItemIcon><RestaurantMenuIcon /></ListItemIcon>
                    <ListItemText primary="Menu" />
                </ListItem>
                <ListItem button onClick={() => { history.push('locations')}}>
                    <ListItemIcon><LocationSearchingIcon /></ListItemIcon>
                    <ListItemText primary="Locations" />
                </ListItem>
            </List>
            <Divider />

            {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </DRAWER>
    )
}))
