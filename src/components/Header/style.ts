import styled from 'styled-components/native'

import { COLORS, FONTS } from './../../theme'

export const Container = styled.View`
  align-items: center
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
`

export const UserInfo = styled.View`
  align-items: center;
  flex-direction: row;
`

export const LogoutText = styled.Text`
  font-size: 15px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.WHITE};
  margin-right: 30px;
`
