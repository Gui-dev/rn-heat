import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import { api } from '../../services/api'
import { Message, MessageProps } from '../Message'
import { Container } from './style'

export const MessagesList = () => {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([])

  const socket = io(String(api.defaults.baseURL))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const messagesQueue: MessageProps[] = []

  socket.on('new_message', (message) => {
    messagesQueue.push(message)
    console.log(message)
  })

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await api.get<MessageProps[]>('/messages/last-messages')
      setCurrentMessages(data)
    }

    fetchMessages()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]])
        messagesQueue.shift()
      }
    }, 3000)

    return () => clearInterval(timer)
  }, [messagesQueue])

  return (
    <Container
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map(message => {
        return (
          <Message key={message.id} data={ message }/>
        )
      })}
    </Container>
  )
}
