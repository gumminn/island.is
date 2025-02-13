import { User } from '../entities/user'

export const MockUser: User = {
  name: 'Guðrún Jónsdóttir',
  nationalId: '1706941119',
  address: 'Lindargata 3',
  city: 'Reykjavík',
  postalCode: '101',
  email: 'gj@island.is',
  numberOfChildren: 1,
  gsm: '1234567',
}

export class UserService {
  // TODO: Remove static and make injectable
  public static getUser(): User {
    return MockUser
  }
}
