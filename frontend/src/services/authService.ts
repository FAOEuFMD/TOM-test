export const login = async (
  email: string,
  password: string
): Promise<{ access_level: string }> => {
  const url = `${import.meta.env.VITE_API_URL}/auth/login`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (!response.ok) {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }

    const data = await response.json();
    return { access_level: data.access_level };
  } catch (error: any) {
    console.error("Login error:", error);
    throw error;
  }
};
