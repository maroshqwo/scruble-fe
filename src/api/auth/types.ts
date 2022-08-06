import { User } from "@/types/auth";

export type LoginDto = {
  email: string
  password: string
}

export type LoginResponse = {
  access_token: string
  user: User
}

export type RegisterDto = {
  email: string
  password: string
  name: string
  handle: string
}

export type RegisterValues = {
  email: string
  password: string
  confirmPassword: string
  name: string
  handle: string
}

export type RegisterResponse = {
  access_token: string
  user: User
}

export type UserResponse = User
