import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";


export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector){}
    
    canActivate(context: ExecutionContext): boolean  {
        // does it have the access ?
        return true;
    }
}