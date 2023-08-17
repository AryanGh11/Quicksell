export type SignupType = {
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  username?: string;
  setUsername?: (val: string) => void;
};
