declare global {
  interface ImportMeta {
    env: {
      VITE_API_URL: string;
    };
  }
}

export const mockApiCall = (
  email: string,
  password: string
): Promise<{ role: string }> => {
  return fetch(`${import.meta.env.VITE_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(response => {
    if (!response.ok) {
      throw new Error("Invalid credentials");
    }
    return response.json();
  });
};
