import React from 'react'
import { TouchableOpacity } from 'react-native'
import { UserPhoto } from '../UserPhoto'

import LogoSvg from './../../assets/logo.svg'
import { Container, UserInfo, LogoutText } from './style'

export const Header = () => {
  return (
    <Container>
      <LogoSvg />
      <UserInfo>
        <TouchableOpacity>
          <LogoutText>Sair</LogoutText>
        </TouchableOpacity>
        <UserPhoto imageUri='https://github.com/Gui-dev.png'/>
      </UserInfo>
    </Container>
  )
}
