export interface User {
  username: string;
  password: string;
  role: string;
}

export interface LoginData {
  users: User[];
}
