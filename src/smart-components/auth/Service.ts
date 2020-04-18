import Http from 'lib/Http'

import { IUser, IUserData } from 'common/types'
import IErrorDelegate from 'common/types/IErrorDelegate'
import IOnSuccessDelegate from 'common/types/IOnSuccessDelegate'
import IApiResponse from 'common/types/IApiResponse'
import IValidationErrorDelegate from 'common/types/IValidationErrorDelegate'

export default class AuthService {
  static onRegister(
    onSuccess: IOnSuccessDelegate<IApiResponse<IUserData>>,
    onError: IErrorDelegate,
    onValidationError: IValidationErrorDelegate,
    setProgress: any
  ) {
    return async (query: IUser) => {
      setProgress(true)
      const [response, , requestError] = await AuthService.register(query)

      onValidationError(requestError?.details || [])
      onError((requestError?.error?.message as string) || '')
      const userResponse = response as IApiResponse<IUserData>

      if (response) onSuccess(userResponse)

      setProgress(false)
    }
  }

  static async register(payload: object): Promise<[IApiResponse<IUserData> | null, number, string | any]> {
    return Http.post<object, IApiResponse<IUserData>>('/user/auth/register', payload)
  }
}
