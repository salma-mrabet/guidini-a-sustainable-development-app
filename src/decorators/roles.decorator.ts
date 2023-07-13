import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';

// new decorator to replace setMetadata('roles, [Role.ADMIN]) in every method

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
