import { Roles } from './user';
import { AuthService } from './services/auth.service';

export interface Roles {
    admin?: boolean;
    reader: boolean;
    landlord?: boolean;
    tenant?: boolean;
}
export class User {
  uid: string;
    email: string;
    photoUrl: string;
  roles: Roles;
}
