export interface IAuth {
  auth?: {
    permissions: string[];
  };
}

export enum UserRole {
  MERCHANT = "merchant",
  ADMIN = "admin",
  USER = "customer",
  AGENT = "agent",
}

export interface TokenUser {
  id: string;
  role: UserRole;
  username: string;
}

export interface LoginUserDto {
  identifier: string;
  password: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface LoginResponseData {
  token: string;
  user: TokenUser;
}

export interface CreateUserDto {
  username: string;
  password: string;
  email: string;
  role: UserRole;
}

export interface SignupResponseData {
  email: string;
  username: string;
}
