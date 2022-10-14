import { IMealDetails } from '../../../interfaces/project.interface'

export const JulivertMeu: IMealDetails = {
  _id: '1111',
  city: 'Barcelona',
  createdAt: '2020-03-02T14:00:00.000Z',
  imageContentUrl: [
    'https://images.unsplash.com/photo-1542730927-8b7b0b0b5f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  ],
  introduction: [' '],
  isVenue: false,
  location: {
    coordinates: [48.856614, 2.3522219],
    type: 'Point'
  },
  name: 'Restaurant Julivert Meu',
  price: 100,
  textContent: [''],
  transfer: [
    {
      _id: '5e5e9b9e0f1c9a0017c5b3f5',
      selectedService: '5e5e9b9e0f1c9a0017c5b3f4'
    }
  ],
  updatedAt: '2020-03-02T14:00:00.000Z',
  venue_price: ['100']
}

export const CanPinxo: IMealDetails = {
  _id: '2222',
  city: 'Barcelona',
  createdAt: '2020-03-02T14:00:00.000Z',
  imageContentUrl: [
    'https://images.unsplash.com/photo-1542730927-8b7b0b0b5f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  ],
  introduction: [' '],
  isVenue: false,
  location: {
    coordinates: [48.856614, 2.3522219],
    type: 'Point'
  },
  name: 'Restaurant Can Pinxo',
  price: 90,
  textContent: [''],
  transfer: [
    {
      _id: '5e5e9b9e0f1c9a0017c5b3f5',
      selectedService: '5e5e9b9e0f1c9a0017c5b3f4'
    }
  ],
  updatedAt: '2020-03-02T14:00:00.000Z',
  venue_price: ['100']
}
