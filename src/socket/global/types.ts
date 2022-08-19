import { Entity } from "@/types/entity";

export type UserWithoutPassword = Entity & {
  email: string
  handle: string
  name: string
}

export type CreateFriendRequestDto = {
  email: string
}

export type FriendRequest = Entity & {
  recipient: UserWithoutPassword
  sender: UserWithoutPassword
  status: "PEDING" | "ACCEPTED" | "REJECTED"
  type: "FRIEND_REQUEST"
}

export type FriendRequests = {
  sentRequests: FriendRequest[]
  recievedRequests: FriendRequest[]
}

export type CreateFriendResponseDto = Entity & {
  error?: {
    message: string
    name: string
    status: number
  }
  request?: FriendRequest
}

export type ResolveFriendResponseDto = Entity & {
  error?: {
    message: string
    name: string
    status: number
  }
  user: UserWithoutPassword
  recieved: boolean
  action: "ACCEPT" | "REJECT" | "CANCEL"
}
