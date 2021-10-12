import { User } from './user';

export const users: User[] = [
  {
    firstName: 'Mock',
    lastName: 'Data',
    emailAddress: 'mock@data.data',
    contactNumber: '+91 1111111111',
    dateOfBirth: new Date('10-10-2010').toLocaleDateString('en-GB'),
    address: '7436 Fieldstone Court'
  },
  {
    firstName: 'Test',
    lastName: 'Data',
    emailAddress: 'test@data.data',
    contactNumber: '+91 9999999999',
    dateOfBirth: new Date('10-09-2011').toLocaleDateString('en-GB'),
    address: '11231 High Court'
  }
];
