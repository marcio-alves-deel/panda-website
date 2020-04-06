import React, { useState } from 'react'
import AuthService from './Service'
import { IUser } from 'common/types'

export const authContext = {
  state: {
    error: '',
    response: {},
    progress: false
  },
  handlers: {
    onRegister: (_query: IUser) => {},
    setError: (_mes: string) => {}
  }
}

export const AuthContextProvider = React.createContext<typeof authContext>(authContext)

const Provider: React.FC = ({ children }) => {
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  const [progress, setProgress] = useState(false)

  const onError = (message: string) => {
    setError(message)
  }

  const onSuccess = (res: object) => {
    setResponse(res)
  }

  const onProgress = (progressValue: boolean) => {
    setProgress(progressValue)
  }

  const handlers = {
    onRegister: AuthService.onRegister(onSuccess, onError, onProgress),
    setError
  }

  const contextValue = {
    ...authContext,
    state: {
      error,
      response,
      progress
    },
    handlers
  }

  return <AuthContextProvider.Provider value={contextValue}>{children}</AuthContextProvider.Provider>
}

export default Provider
