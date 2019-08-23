class Api {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  async post(url: string, data: string) {
    const response = await fetch(this.baseUrl + url, {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        data: data,
        completed: false,
        userName: localStorage.getItem("userData")
      })
    });
    return response.json();
  }
  async delite(url: string, id: string) {
    await fetch(this.baseUrl + url + `${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        userName: localStorage.getItem("userData")
      })
    });
  }
  async get(url: string) {
    const response = await fetch(this.baseUrl + url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        userData: `${localStorage.getItem("userData")}`
      }
    });
    return response.json();
  }
  async put(url: string, id: string, completed: boolean) {
    await fetch(this.baseUrl + url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        id: id,
        completed: !completed
      })
    });
  }
}
export const api = new Api("http://37.228.116.182:3001/api/");
