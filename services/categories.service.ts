import { httpClient } from '../plugins';
import { useAuthContext } from '../contexts/authContext';

const ENDPOINT = process.env.NEXT_PUBLIC_APP_API_URL;

export default function getCategories(authToken: string) {
  return httpClient
    .get(
      `${ENDPOINT}/api/v1/user_categories/getUserCategories`,
      authToken
    )
    .then((res) => {
      if(!res) return [];
      return res;
    });
}
