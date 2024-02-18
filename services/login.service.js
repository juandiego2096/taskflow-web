const ENDPOINT = process.env.REACT_APP_API_URL;

export default function login({username, password}) {
  return fetch(`http://taskflow.ddns.net:3001/api/v1/auth/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username, password})
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { accessToken } = res
    return { token: accessToken }
  })
}