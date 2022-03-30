import React from 'react'

import { Header } from '../../components/Header'
import { MessagesList } from '../../components/MessagesList'
import { SignInBox } from '../../components/SignInBox'

import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Header />
      <MessagesList />
      <SignInBox />
    </Container>
  )
}
