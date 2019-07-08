class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    // this.token = localStorage.getItem('token')
  }
  async post(url, data) {
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
  async delite(url, id) {
    await fetch(this.baseUrl + url + `${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  }
  async get(url) {
    const response = await fetch(this.baseUrl + url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return response.json()
  }
  async put(url, id, completed) {
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
