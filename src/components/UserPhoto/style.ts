import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS } from '../../theme'

type ContainerProps = {
  containerSize: number
}

type ImageProps = {
  avatarSize: number
}

export const Container = styled(LinearGradient)<ContainerProps>`
  align-items: center;
  justify-content: center;
  height: ${({ containerSize }) => containerSize}px;
  width: ${({ containerSize }) => containerSize}px;
  border-radius: ${({ containerSize }) => containerSize / 2}px;
`

export const Image = styled.Image<ImageProps>`
  height: ${({ avatarSize }) => avatarSize}px;
  width: ${({ avatarSize }) => avatarSize}px;
  border-color: ${COLORS.BLACK_SECONDARY};
  border-width: 4px;
  border-radius: ${({ avatarSize }) => avatarSize / 2}px;
`
