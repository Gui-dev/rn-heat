import React from 'react'

import { COLORS } from '../../theme'
import avatarImg from './../../assets/avatar.png'
import { Container, Image } from './style'

const SIZES = {
  SMALL: {
    containerSize: 32,
    avatarSize: 28
  },
  NORMAL: {
    containerSize: 48,
    avatarSize: 42
  }
}

type UserPhotoProps = {
  imageUri: string | undefined
  sizes?: 'SMALL' | 'NORMAL'
}

export const UserPhoto = ({ imageUri, sizes = 'NORMAL' }: UserPhotoProps) => {
  const { containerSize, avatarSize } = SIZES[sizes]
  const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri

  return (
    <Container
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      colors={[COLORS.PINK, COLORS.YELLOW]}
      containerSize={ containerSize }
    >
      <Image
        source={{ uri: imageUri || AVATAR_DEFAULT }}
        avatarSize={ avatarSize }
      />
    </Container>
  )
}
