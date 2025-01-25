import { URL } from "../constants";

export async function fetchTodos() {
  var res = await fetch(`${URL}/todos`);
  var data = await res.json();
  return data;
}

export async function addTodo(todo) {
  var res = await fetch(`${URL}/todos`, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

  return res;
}
