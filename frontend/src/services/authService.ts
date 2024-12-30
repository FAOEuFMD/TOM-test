import type { User } from "@/types/user";

export async function login(email: string, password: string): Promise<User> {
  const url = `${import.meta.env.VITE_BACKEND_URL}/auth/login`;

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
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as User;
  } catch (error: any) {
    console.error("Login error:", error);
    throw error;
  }
}
