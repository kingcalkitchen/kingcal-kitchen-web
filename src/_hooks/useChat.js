import { useState, useEffect } from 'react'
import { HubConnectionBuilder } from '@aspnet/signalr'

export const useChat = () => {
    const [nickName, setNickName] = useState('')
    const [hubConnection, setHubConnection] = useState(null)

    useEffect(() => {
        let _hubConnection = new HubConnectionBuilder()
            .withUrl("http://ec2-3-21-171-213.us-east-2.compute.amazonaws.com/chatHub")
            .build()
            _hubConnection.start().then(() => console.log('Connection started!')).catch(err => console.log(err))

        setNickName(window.prompt('Your name: '))
        setHubConnection(_hubConnection)
    }, [])

    return { nickName, hubConnection }
}
