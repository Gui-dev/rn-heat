import React from 'react'

import { Header } from '../../components/Header'
import { MessagesList } from '../../components/MessagesList'
import { SendMessageForm } from '../../components/SendMessageForm'
import { SignInBox } from '../../components/SignInBox'
import { useAuth } from '../../hooks/useAuth'

import { Container } from './style'

export const Home = () => {
  const { user } = useAuth()
  return (
    <Container>
      <Header />
      <MessagesList />
      { user ? <SendMessageForm /> : <SignInBox /> }
    </Container>
  )
}
