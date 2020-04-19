import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Paper, IconButton, TextField, AppBar, Toolbar } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import { ChatMessages } from './../_components/Chat'
import { useChat } from './../_hooks'
import { useStyles } from './styles'

export const Chat = props => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [inputValid, setInputValid] = useState(true)

    const classes = useStyles()
    const hubInfo = useChat()

    useEffect(() => {
        if (hubInfo && hubInfo.hubConnection) {
            hubInfo.hubConnection.on("send", (user, message) => {
                const text = `${user}: ${message}`
                const _messages = messages.concat([text])
                setMessages(_messages)
            })
        }
    }, [hubInfo, hubInfo.hubConnection, messages])

    const sendMessage = event => {
        event.preventDefault()
        if (message === '') {
            setInputValid(false)
            return
        }
        hubInfo.hubConnection
            .invoke('send', hubInfo.nickName, message)
            .catch(err => console.error(err))

        setInputValid(true)
        setMessage('')
    }

    return (
        <>
            {messages && messages.length > 0 &&
                <Paper style={{ margin: 20, padding: 20 }}>
                    <ChatMessages messages={messages} />
                </Paper>
            }

            <AppBar
                color="secondary"
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.open,
                })}>
                <Toolbar>
                    <form>
                        <TextField
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            error={inputValid ? false : true}
                            id="chat-input"
                            label="Message"
                            helperText={inputValid ? '' : 'You must enter something'}
                        />

                        <IconButton type="submit" onClick={sendMessage} edge="start">
                            <SendIcon color="primary" />
                        </IconButton>
                    </form>
                </Toolbar>
            </AppBar>
        </>
    )
}