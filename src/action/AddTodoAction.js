export const addTodo = text => async () => {
  const response = await fetch('http://localhost:3000/api/users/', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name: text, age: 22 }),
  })
  const data = await response.json()
  console.log(data)
}
