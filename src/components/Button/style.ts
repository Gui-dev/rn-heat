import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { FONTS } from '../../theme'

type ContainerProps = {
  background: string
}

type ButtonTextProps = {
  color: string
  icon?: React.ComponentProps<typeof AntDesign>['name']
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 48px;
  width: 100%;
  background: ${({ background }) => background};
`

export const ButtonTitle = styled.Text<ButtonTextProps>`
  font-size: 16px;
  font-family: ${FONTS.BOLD};
  color: ${({ color }) => color};
  margin-left: ${({ icon }) => icon ? '12px' : '0px'};
`
