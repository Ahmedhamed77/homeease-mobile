import { User } from "../../../shared/types"

export type House = {
  id: string
  name: string
  createdAt: Date
  invitationCode: string
  updatedAt: Date
  users?: User[];
}

export type CreateHousePayload = {
  name: string
}
export type UpdateHousePayload = {
  name: string
}

