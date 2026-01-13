import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Role } from './role.enum';

@Injectable()
export class CreateUserRoleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const body = request.body;

    if (body.roles !== Role.comander) {
      throw new ForbiddenException('Only comander can be created');
    }

    return true;
  }
}