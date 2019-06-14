export default function addTodo() {
  return function(dispatch) {
    fetch('http://localhost:3000/api/users/')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }
}
