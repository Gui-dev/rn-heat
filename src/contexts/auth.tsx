import React, { createContext, ReactNode, useEffect, useState } from 'react'
import * as AuthSessions from 'expo-auth-session'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from '../services/api'

type User = {
  id: string
  name: string
  login: string
  github_id: string
  avatar_url: string
}

type AuthContextProps = {
  user: User | null
  isLoading: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthResponse = {
  userToken: string
  user: User
}

type AuthorizationResponse = AuthSessions.AuthSessionResult & {
  params: {
    code?: string
    error?: string
  }
  type?: string
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const USER_STORAGE = '@rnheat:user'
  const TOKEN_STORAGE = '@rnheat:token'

  useEffect(() => {
    const loadUser = async () => {
      const user = await AsyncStorage.getItem(USER_STORAGE)
      const token = await AsyncStorage.getItem(TOKEN_STORAGE)

      if (user && token) {
        setUser(JSON.parse(user))
        api.defaults.headers.common.Authorization = `Bearer ${token}`
      }
      setIsLoading(false)
    }

    loadUser()
  }, [])

  const signIn = async () => {
    try {
      setIsLoading(true)
      const CLIENT_ID = 'f8ef90cfffd1c1f9c0bc'
      const authUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${CLIENT_ID}`
      const authSessionResponse = await AuthSessions.startAsync({ authUrl }) as AuthorizationResponse

      if (authSessionResponse.type === 'success' && authSessionResponse.params.error !== 'access_denied') {
        const { data } = await api.post<AuthResponse>('/authenticate', {
          code: authSessionResponse.params.code
        })
        const { user, userToken } = data

        api.defaults.headers.common.Authorization = `Bearer ${userToken}`
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
        await AsyncStorage.setItem(TOKEN_STORAGE, JSON.stringify(userToken))

        setUser(user)
      }
    } catch (error) {
      Alert.alert('Opsssss', 'Erro ao logar, tente outra vez')
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    setUser(null)
    await AsyncStorage.removeItem(USER_STORAGE)
    await AsyncStorage.removeItem(TOKEN_STORAGE)
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      signIn,
      signOut
    }}>
      { children }
    </AuthContext.Provider>
  )
}
