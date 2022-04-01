import React from 'react'
import { TouchableOpacity } from 'react-native'

import { UserPhoto } from '../UserPhoto'
import { useAuth } from '../../hooks/useAuth'
import LogoSvg from './../../assets/logo.svg'
import { Container, UserInfo, LogoutText } from './style'

export const Header = () => {
  const { user, signOut } = useAuth()

  const handleSignOut = () => {
    signOut()
  }

  return (
    <Container>
      <LogoSvg />
      <UserInfo>
        { user &&
          <TouchableOpacity
            onPress={ handleSignOut }
          >
            <LogoutText>Sair</LogoutText>
          </TouchableOpacity>
        }
        <UserPhoto imageUri={ user?.avatar_url }/>
      </UserInfo>
    </Container>
  )
}
