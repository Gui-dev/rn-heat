import React from 'react'

import { Message } from '../Message'
import { Container } from './style'

export const MessagesList = () => {
  const message = {
    id: '1',
    text: 'Teste de mensagem',
    user: {
      name: 'Gui Silva',
      avatar_url: 'https://github.com/Gui-dev.png'
    }
  }

  return (
    <Container
      keyboardShouldPersistTaps="never"
    >
      <Message data={ message }/>
    </Container>
  )
}
