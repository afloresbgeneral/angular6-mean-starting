import { UserModel } from '../models/user.model';
import { AnimalModel } from '../models/animal.model';
export interface UserServiceResponse {
    message: string;
    user?: UserModel;
}

export interface AnimalServiceResponse {
    message: string;
    animal?: AnimalModel;
    animals?: Array<AnimalModel>;
}
