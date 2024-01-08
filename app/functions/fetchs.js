export async function post(route, body) {
  await fetch(route, {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify(body)
  })
  .then(response => response.json())

}