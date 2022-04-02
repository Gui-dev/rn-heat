import React, { useState } from 'react'
import { Alert, Keyboard } from 'react-native'
import { api } from '../../services/api'
import { COLORS } from '../../theme'
import { Button } from '../Button'

import { Container, TextInput } from './style'

export const SendMessageForm: React.FC = () => {
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)

  const handleSendMessage = async () => {
    setSendingMessage(true)
    const messageFormmated = message.trim()

    if (messageFormmated.length < 1) {
      Alert.alert('Opsssss', 'O campo mensagem deve ser preenchido')
    }

    try {
      await api.post('/messages', { message: messageFormmated })
      Keyboard.dismiss()
      Alert.alert('Parabéns', 'Mensagem enviada com sucesso')
      setMessage('')
      setSendingMessage(false)
    } catch {
      Alert.alert('Erro', 'Algo deu errado, tente novamente mais tarde')
    }
  }

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
        isLoading={sendingMessage}
        onPress={handleSendMessage}
      />
    </Container>
  )
}
