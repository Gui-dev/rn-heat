import styled from 'styled-components/native'
import { MotiView } from 'moti'

import { COLORS, FONTS } from '../../theme'

export const Container = styled(MotiView)`
  margin-bottom: 36px;
  width: 100%;
`

export const MessageText = styled.Text`
  font-size: 15px;
  font-family: ${FONTS.REGULAR};
  line-height: 20px;
  color: ${COLORS.WHITE};
  margin-bottom: 12px;
`

export const UserInfo = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
`

export const UserName = styled.Text`
  font-size: 15px;
  font-family: ${FONTS.BOLD};
  line-height: 20px;
  color: ${COLORS.WHITE};
  margin-left: 16px;
`
