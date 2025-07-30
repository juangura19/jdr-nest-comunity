import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) { }

  async generateToken(payload: any, expiresIn: string) {
    return this.jwtService.sign(payload, { expiresIn });
  }

  async decodeToken(token: string) {
    return this.jwtService.decode(token);
  }

  async verifyToken(token: string) {
    return this.jwtService.verify(token);
  }
}