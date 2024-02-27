const requestHeaders: HeadersInit = new Headers();
requestHeaders.set('Content-Type', 'application/json');

export const httpClientPlugin = {
  async get(url: string, accessToken: string | null = null) {
    if(accessToken) requestHeaders.set('Authorization', accessToken);
    return fetch(url, {
      method: "GET",
      mode: "cors",
      headers: requestHeaders,
    })
      .then((response) => {
        if (!response) return null;
        if(!response.ok) {
          if(response.status === 401) {
            console.log('No autorizado');
            return null;
          }
          else console.log(response.status);
        }
        return response.json();
      });
  },

  async post(url: string, body: string, accessToken: string | null = null) {
    if(accessToken) requestHeaders.set('Authorization', accessToken);
    return fetch(url, {
      method: "POST",
      mode: "cors",
      headers: requestHeaders,
      body: body,
    })
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      });
  },

  put: async (url: string, body: string) => {},
  delete: async (url: string) => {},
};