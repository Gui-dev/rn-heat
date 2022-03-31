import React, { useState } from 'react'
import { COLORS } from '../../theme'
import { Button } from '../Button'

import { Container, TextInput } from './style'

export const SendMessageForm: React.FC = () => {
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

  return (
    <Container>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual é sua expectativa para o evento ?"
        maxLength={140}
        multiline
        value={message}
        onChangeText={ setMessage }
        editable={!sendingMessage}
      />

      <Button
        title="ENVIAR MENSAGEM"
        color={COLORS.BLACK_SECONDARY}
        background={COLORS.PINK}
      />
    </Container>
  )
}
