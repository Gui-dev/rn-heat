import React from 'react'
import { TouchableOpacityProps, ActivityIndicator } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { Container, ButtonTitle } from './style'

type ButtonProps = TouchableOpacityProps & {
  title: string
  color: string
  background: string
  icon?: React.ComponentProps<typeof AntDesign>['name']
  isLoading?: boolean
}

export const Button = ({ title, color, background, icon, isLoading = false, ...rest }: ButtonProps) => {
  return (
    <Container
      activeOpacity={0.7}
      disabled={isLoading}
      background={background}
      {...rest}
    >
        {
          isLoading
            ? <ActivityIndicator size={'large'} color={color}/>
            : <>
              <AntDesign name={icon} size={24}/>
            <ButtonTitle color={color} icon={icon}>
              { title }
            </ButtonTitle>
          </>
        }

    </Container>
  )
}
