import { CanActivate, ExecutionContext, UnauthorizedException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'

import { Roles } from './roles.decorator';
import { Role } from './role.enum';





@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private jwtService: JwtService
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token);
      console.log(payload);

      request['user'] = payload;
      if (payload.result.role === Role.comander) {
        return true
      }

    } catch {
      throw new UnauthorizedException();
    }
    throw new UnauthorizedException("solider");;

  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const { authorization } = request.headers
    return authorization
  }
}