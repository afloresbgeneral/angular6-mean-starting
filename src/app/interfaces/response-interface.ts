import { UserModel } from '../models/user.model';
export interface UserServiceResponse {
        message: string;
        user?: UserModel;
    }
