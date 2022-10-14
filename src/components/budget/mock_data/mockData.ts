import { IBudgetState, IVendor } from '../context/interfaces'

const vendors: IVendor[] = [
  {
    vendor1: {
      id: '1',
      amount: 100
    }
  },
  {
    vendor2: {
      id: '2',
      amount: 200
    }
  },
  {
    vendor3: {
      id: '3',
      amount: 300
    }
  },
  {
    vendor4: {
      id: ' 4',
      amount: 400
    }
  },
  {
    vendor5: {
      id: '5',
      amount: 500
    }
  },
  {
    vendor6: {
      id: '6',
      amount: 400
    }
  },
  {
    vendor6: {
      id: '7',
      amount: 400
    }
  }
]

export const rows: IBudgetState[] = [
  {
    _id: 'b1',
    day: '',
    name: 'Accommodation',
    options: [vendors[0], vendors[1]]
  },
  {
    _id: 'b2',
    day: 'Arrival Day',
    name: 'Morning Activity',
    options: [vendors[2]]
  },

  {
    _id: 'b3',
    day: 'Arrival Day',
    name: 'Lunch',
    options: [vendors[3], vendors[4]]
  },
  {
    _id: 'b4',
    day: 'Arrival Day',
    name: 'Afternoon Activity',
    options: [vendors[5]]
  },
  {
    _id: 'b5',
    day: 'Day 1',
    name: 'Morning Meeting',
    options: [vendors[6]]
  }
]
