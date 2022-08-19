// eslint-disable-next-line import/no-unresolved
import { Entity } from "./entity";

export type User = Entity & {
  handle: string
  email: string
  name: string
}

export type UserUpdate = {
  handle?: string
  email?: string
  name?: string
}
