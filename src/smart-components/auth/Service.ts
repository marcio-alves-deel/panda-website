import Http from 'lib/Http'

import { IUser } from 'common/types'
import IErrorDelegate from 'common/types/IErrorDelegate'
import ISuccessDelegate from 'common/types/ISuccessDelegate'

export default class AuthService {
  static onRegister(onSuccess: ISuccessDelegate, onError: IErrorDelegate, setProgress: any) {
    return async (query: IUser) => {
      setProgress(true)
      const [response, , requestError] = await AuthService.register(query)

      if (Boolean(requestError)) {
        onError(requestError as string)
      } else {
        const userResponse = response as ISuccessDelegate
        onError('')
        onSuccess(userResponse as ISuccessDelegate)
      }
      setProgress(false)
    }
  }

  static async register(params: object): Promise<[ISuccessDelegate | null, number, string | null]> {
    return Http.post<object, ISuccessDelegate>('/user', params)
  }
}
