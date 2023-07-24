import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const DefaultUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.user._id; // Assuming 'user' is the property in the request object that holds the user object with an '_id' property representing the user's ID
  },
);