export interface IAuthContext {
  login: (authentication: any) => Promise<void>;
  logout: () => void;
  user: string | null;
  token: string | null;
}

export interface IAuthProvider {
  children: React.ReactNode
}

