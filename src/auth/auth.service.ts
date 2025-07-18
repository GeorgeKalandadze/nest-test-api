import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

type AuthInput = { username: string; password: string };
type SignInData = { userId: number; username: string };
type AuthResult = { accessToken: string; userId: number; username: string };

@Injectable()
export class AuthService {
  authenticate(input: AuthInput): AuthResult {
    const user = this.validateUser(input);
    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      accessToken: 'fake-access',
      userId: user.userId,
      username: user.username,
    };
  }
  constructor(private usersService: UsersService) {}
  validateUser(input: AuthInput): SignInData | null {
    const user = this.usersService.findUserByName(input.username);
    if (user && user.password === input.password) {
      return {
        userId: user.userId,
        username: user.username,
      };
    }
    return null;
  }
}
