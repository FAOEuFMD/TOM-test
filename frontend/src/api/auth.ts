export const mockApiCall = (
  email: string,
  password: string
): Promise<{ role: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "password") {
        resolve({ role: "user" });
      } else if (email === "admin@example.com" && password === "adminpass") {
        resolve({ role: "admin" });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};
