import React, { useState } from 'react'
import AuthService from './Service'
import { IUser } from 'common/types'

export const authContext = {
  state: {
    error: '',
    response: {}
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

  const onError = (message: string) => {
    setError(message)
  }

  const onSuccess = (res: object) => {
    setResponse(res)
  }

  const handlers = {
    onRegister: AuthService.onRegister(onSuccess, onError),
    setError
  }

  const contextValue = {
    ...authContext,
    state: {
      error,
      response
    },
    handlers
  }

  return <AuthContextProvider.Provider value={contextValue}>{children}</AuthContextProvider.Provider>
}

export default Provider
