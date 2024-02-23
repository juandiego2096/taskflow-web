import { httpClient } from '../plugins';

const ENDPOINT = process.env.NEXT_PUBLIC_APP_API_URL;

export default function login(username: string, password: string) {
  return httpClient
    .post(
      `${ENDPOINT}/api/v1/auth/login`,
      JSON.stringify({ username, password })
    )
    .then((res) => {
      const { accessToken } = res;
      return { token: accessToken };
    });
}
