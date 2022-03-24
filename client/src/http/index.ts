import { AuthResponse } from '../models/response/AuthResponse'

export const API_URL = 'https://localhost:5000/api'

export default class XHR {
   static createXHR (type: string, url: string, body: any = null): Promise<any> {
    return new Promise<AuthResponse>((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', `${API_URL}${url}`)
      xhr.setRequestHeader('Authorization', `Baerer ${localStorage.getItem('token')}`)
      xhr.responseType = 'json'
      xhr.onload = () => { resolve(xhr.response) }
      xhr.onerror = () => { reject(xhr.response) }
      xhr.send(body)
    })
  }

  static get (url: string, body: any = null): Promise<any> {
    return XHR.createXHR('GET', url, body)
  }

  static post (url: string, body: any = null): Promise<any> {
    return XHR.createXHR('POST', url, body)
  }
}
