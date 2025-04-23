export const BASE_URL = `https://raw.githubusercontent.com/aziham/tilawaat-api/refs/heads/main`;

export async function fetcher<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  const data: T = await response.json();
  return data;
}
