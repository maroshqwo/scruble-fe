// eslint-disable-next-line import/no-unresolved
import { Entity } from ".";

export type User = Entity & {
  handle: string
  email: string
  firstName: string
  lastName: string
}
