import { getBottomSpace } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'
import { COLORS } from '../../theme'

export const Container = styled.View`
  height: 184px;
  width: 100%;
  background-color: ${COLORS.BLACK_TERTIARY};
  padding: 0 20px;
  padding-top: 16px;
  padding-bottom: ${getBottomSpace() + 16}px;

`

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: COLORS.GRAY_PRIMARY
})`
  text-align-vertical: top;
  color: ${COLORS.WHITE};
  height: 88px;
  width: 100%;
`
