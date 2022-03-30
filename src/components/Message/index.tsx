import React from 'react'

import { UserPhoto } from '../UserPhoto'
import { Container, MessageText, UserInfo, UserName } from './style'

export type MessageProps = {
  id: string
  text: string
  user: {
    name: string
    avatar_url: string
  }
}

type Props = {
  data: MessageProps
}

export const Message = ({ data }: Props) => {
  return (
    <Container
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
    >
      <MessageText>{ data.text }</MessageText>

      <UserInfo>
        <UserPhoto
          imageUri={ data.user.avatar_url }
          sizes='SMALL'
        />
        <UserName>{ data.user.name }</UserName>
      </UserInfo>
    </Container>
  )
}
