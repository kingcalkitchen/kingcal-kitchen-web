import { useState, useEffect } from 'react'
import { HubConnectionBuilder } from '@aspnet/signalr'

export const useChat = () => {
    const [nickName, setNickName] = useState('')
    const [hubConnection, setHubConnection] = useState(null)

    useEffect(() => {
        let _hubConnection = new HubConnectionBuilder()
            .withUrl("http://localhost:5000/chatHub")
            .build()
            _hubConnection.start().then(() => console.log('Connection started!'))

        setNickName(window.prompt('Your name: '))
        setHubConnection(_hubConnection)
    }, [])

    return { nickName, hubConnection }
}