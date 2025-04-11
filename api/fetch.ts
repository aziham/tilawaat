export const BASE_URL = `https://cdn.jsdelivr.net/gh/aziham/tilawaat-api`;

export async function fetcher<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  const data: T = await response.json();
  return data;
}
