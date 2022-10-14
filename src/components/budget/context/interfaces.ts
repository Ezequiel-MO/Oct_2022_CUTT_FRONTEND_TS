import { IMeal } from '../../../interfaces/project.interface'

type IVendorDetails = {
  id: string
  amount: number
}

export type IVendor = {
  [key: string]: IVendorDetails
}

export interface IBudgetState {
  _id: string
  day: string
  name: string
  options: IVendor[]
}

export interface IBudgetValues {
  budget: IBudgetState[]
  total: number
}
