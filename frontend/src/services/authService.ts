export const login = async (
  email: string,
  password: string
): Promise<{ access_level: string }> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    console.log("Login response data:", data);
    return { access_level: data.access_level };
  } catch (error: any) {
    console.error("Login error:", error);
    throw new Error(error.message || "An error occurred during login");
  }
};
