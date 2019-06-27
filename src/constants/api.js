class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  async post(url, userData, token) {
    const response = await fetch(this.baseUrl + url, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        todoText: userData.todoText,
        userId: userData.userId,
      }),
    })
    return response.json()
  }
  async delite(url, id, token) {
    await fetch(this.baseUrl + url + `${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
  async get(url) {
    const response = await fetch(this.baseUrl + url)
    return response.json()
  }
  async put(url, id, token, completed) {
    await fetch(this.baseUrl + url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: id,
        completed: !completed,
      }),
    })
  }
}
export const api = new Api('http://localhost:3001/api/')
