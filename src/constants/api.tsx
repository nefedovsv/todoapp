class Api {
  baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    // this.token = localStorage.getItem('token')
  }
  async post(url: string, data: string) {
    const response = await fetch(this.baseUrl + url, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        data: data,
      }),
    })
    return response.json()
  }
  async delite(url: string, id: string) {
    await fetch(this.baseUrl + url + `${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  }
  async get(url: string) {
    const response = await fetch(this.baseUrl + url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return response.json()
  }
  async put(url: string, id: string, completed: boolean) {
    await fetch(this.baseUrl + url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        id: id,
        completed: !completed,
      }),
    })
  }
}
export const api = new Api('http://localhost:3001/api/')
