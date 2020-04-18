// Global window
export const TOKEN_KEY = 'pandaro_token'

export default class Vault {
  public static getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY)
  }

  public static setToken(token: string) {
    return window.localStorage.setItem(TOKEN_KEY, token)
  }

  public static clearToken() {
    window.localStorage.removeItem(TOKEN_KEY)
  }
}
