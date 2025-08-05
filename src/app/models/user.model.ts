export interface User {
  id?: number;
  username: string;
  password: string;
  email: string;
  role: string;
  dateCreation?: string | null;
  dateModification?: string | null;
}
