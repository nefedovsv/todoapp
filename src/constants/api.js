class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  async post(url, text) {
    const response = await fetch(this.baseUrl + url, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ todoText: text }),
    })
    return response.json()
  }
  async delite(url, id) {
    await fetch(this.baseUrl + url + `${id}`, {
      method: 'DELETE',
    })
  }
  async get(url) {
    const response = await fetch(this.baseUrl + url)
    return response.json()
  }
  async put(url, id, completed) {
    await fetch(this.baseUrl + url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        completed: !completed,
      }),
    })
  }
}
export const api = new Api('http://localhost:3001/api/')
