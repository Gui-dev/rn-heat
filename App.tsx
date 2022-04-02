import React from 'react'
import { StatusBar } from 'react-native'
import AppLoading from 'expo-app-loading'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'

import { AuthProvider } from './src/contexts/auth'
import { Home } from './src/screens/Home'

export default function App () {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor="#121214"/>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </>
  )
}
