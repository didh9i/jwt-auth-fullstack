import { defineStore } from 'pinia'
import { IUser } from '../models/IUser'
import AuthService from '../service/AuthService'

interface IAuthState {
  user: IUser | null
  isAuth: boolean
}

const useAuth = defineStore('auth', {
  state: (): IAuthState => ({
    user: null,
    isAuth: false
  }),
  actions: {
    setAuth (bool: boolean): void {
      this.isAuth = bool
    },
    setUser (user: IUser | null): void {
      this.user = user
    },
    async login (email: string, password: string) {
      try {
        const response = await AuthService.login(email, password)
        localStorage.setItem('token', response.data.accessToken)
        this.setAuth(true)
        this.setUser(response.data.user)
      } catch (e: any) {
        console.log(e?.response?.data?.message)
      }
    },
    async registration (email: string, password: string) {
      try {
        const response = await AuthService.registration(email, password)
        localStorage.setItem('token', response.data.accessToken)
        this.setAuth(true)
        this.setUser(response.data.user)
      } catch (e: any) {
        console.log(e?.response?.data?.message)
      }
    },
    async logout (email: string, password: string) {
      try {
        const response = await AuthService.logout()
        localStorage.removeItem('token')
        this.setAuth(false)
        this.setUser(null)
      } catch (e: any) {
        console.log(e?.response?.data?.message)
      }
    }
  }
})

export default useAuth
