export interface User {
  id: string;
  fullname: string;
  email: string;
  password: string;
  country: string;
  region: string;
  access_level: string;
  role: string;
  framework: string;
  accept_policy: boolean;
  last_login: string;
  last_logout: string;
}
