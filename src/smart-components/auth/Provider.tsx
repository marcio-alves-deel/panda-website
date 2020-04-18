import React, { useState, useCallback } from 'react'
import AuthService from './Service'
import { IUser, IUserData } from 'common/types'
import IApiResponse from 'common/types/IApiResponse'

export const authContext = {
  state: {
    error: '',
    response: {},
    progress: false,
    validationError: {}
  },
  handlers: {
    onRegister: (_query: IUser) => {},
    setError: (_mes: string) => {}
  }
}

const convertArrayToObject = (array: any[], key: string) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item.message.replace(/"/g, "'")
    }
  }, initialValue)
}

export const AuthContextProvider = React.createContext<typeof authContext>(authContext)

const Provider: React.FC = ({ children }) => {
  const [error, setError] = useState(null)
  const [validationError, setValidationError] = useState({})
  const [response, setResponse] = useState(null)
  const [progress, setProgress] = useState(false)

  const onError = (message: string) => {
    setError(message)
  }

  const onValidationError = (errors: object[]) => {
    setValidationError(convertArrayToObject(errors, 'param'))
  }

  const onSuccess = useCallback((result: IApiResponse<IUserData>) => {
    if (result.data) {
      setResponse(result.data)
    }
  }, [])

  const onProgress = (progressValue: boolean) => {
    setProgress(progressValue)
  }

  const handlers = {
    onRegister: AuthService.onRegister(onSuccess, onError, onValidationError, onProgress),
    setError
  }

  const contextValue = {
    ...authContext,
    state: {
      error,
      response,
      progress,
      validationError
    },
    handlers
  }

  return <AuthContextProvider.Provider value={contextValue}>{children}</AuthContextProvider.Provider>
}

export default Provider
