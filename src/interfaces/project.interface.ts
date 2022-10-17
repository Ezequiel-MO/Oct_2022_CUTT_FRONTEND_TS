type ILocation = {
  type: 'Point'
  coordinates: [number, number]
}

type ITransfer = {
  _id: string
  selectedService: string
}

type IAccountManager = {
  _id: string
  email: string
  familyName: string
  firstName: string
  imageContentUrl: string[]
}

type IClientAccountManager = {
  clientCompany: string
  country: string
  email: string
  familyName: string
  firstName: string
  phone: string
  quoteLanguage: 'EN' | 'FR' | 'DE' | 'ES'
}

type IHotel = {}

type IEvent = {}

export type IMealDetails = {
  id: string
  name: string
  price?: number
  city?: string
  createdAt?: string
  imageContentUrl?: string[]
  introduction?: string[]
  isVenue?: boolean
  location?: ILocation
  textContent?: string[]
  transfer?: ITransfer[]
  updatedAt?: string
  venue_price?: string[]
}

export type IMeal = {
  [key: string]: IMealDetails
}

type IDay = {
  _id: string
  date: string
  afternoonEvents: IEvent[]
  afternoonMeetings: IEvent[]
  dinner: IMeal[]
  fullDayMeetings: IEvent[]
  lunch: IMeal[]
  morningEvents: IEvent[]
  morningMeetings: IEvent[]
  transfer_in: IEvent[]
  transfer_out: IEvent[]
}

export interface IProject {
  _id: string
  accountManager: IAccountManager[]
  arrivalDay: string
  clientAccManager: IClientAccountManager[]
  code: string
  createdAt: string
  departureDay: string
  estimate: number
  groupLocation: ILocation
  groupName: string
  hotels: IHotel[]
  nrPax: number
  projectIntro: string[]
  schedule: IDay[]
  status: 'Received' | 'Sent' | 'Confirmed' | 'Cancelled' | 'Invoiced'
  updatedAt: string
}
