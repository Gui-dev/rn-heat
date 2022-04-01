import React from 'react'

import { COLORS } from '../../theme'
import { useAuth } from '../../hooks/useAuth'
import { Button } from './../Button'
import { Container } from './style'

export const SignInBox: React.FC = () => {
  const { signIn, isLoading } = useAuth()

  const handleSignIn = () => {
    signIn()
  }

  return (
    <Container>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        background={COLORS.YELLOW}
        icon="github"
        onPress={ handleSignIn }
        isLoading={ isLoading }
      />
    </Container>
  )
}
