import React from 'react'
import { Typography } from '@material-ui/core'

export const ChatMessages = props => {
    return (
        <>
            {props.messages.map((message, index) => (
                <Typography style={{ display: 'block', margin: 5 }} key={index}> {message} </Typography>
            ))}
        </>
    )
}