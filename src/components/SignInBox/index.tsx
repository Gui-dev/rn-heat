import React from 'react'
import { COLORS } from '../../theme'

import { Button } from './../Button'
import { Container } from './style'

export const SignInBox: React.FC = () => {
  return (
    <Container>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        background={COLORS.YELLOW}
        icon="github"
      />
    </Container>
  )
}
