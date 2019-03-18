export class UserModel {
    constructor(
        public _id: string,
        public name: string,
        public lastName: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string,
        public getToken: string
    ) {}
}
