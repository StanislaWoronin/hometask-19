import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // if (!request.user) {
    //   console.log('AuthBearerGuard must be used');
    // }

    return request.user;
  },
);
