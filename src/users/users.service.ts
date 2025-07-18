import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

const users: User[] = [
  {
    userId: 1,
    username: 'test',
    password: 'test123',
  },
  {
    userId: 2,
    username: 'test 2',
    password: 'test123',
  },
];

@Injectable()
export class UsersService {
  findUserByName(username: string): User | undefined {
    return users.find((user) => user.username === username);
  }
}
