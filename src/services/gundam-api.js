export const gundamFetch = (method, body, id) => {
  if (method !== 'GET') {
    return fetch(`${url}/api/v1/gundams/${id}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then(res => res.json());
  }

  return fetch(`${url}/api/v1/gundams/${id !== null ? id : ''}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};