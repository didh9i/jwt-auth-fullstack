import XHR from '../http'
import { AuthResponse } from '../models/response/AuthResponse'

export default class AuthService {
  static async login (email: string, password: string): Promise<AuthResponse> {
    return XHR.post('/login', { email, password })
  }

  static async registration (email: string, password: string): Promise<AuthResponse> {
    return XHR.post('/registration', { email, password })
  }

  static async logout (): Promise<AuthResponse> {
    return XHR.post('/logout')
  }
}
