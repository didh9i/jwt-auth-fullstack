import { IUser } from '../models/IUser'
import XHR from '../http'

export default class AuthService {
  static fetchUsers (): Promise<IUser[]> {
    return XHR.get('/users')
  }
}
