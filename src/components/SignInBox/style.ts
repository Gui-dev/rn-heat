import { getBottomSpace } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 20px;
  padding-bottom: ${getBottomSpace() + 32}px;
`
