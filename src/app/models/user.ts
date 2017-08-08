export class User {
    constructor(
        public id: string,
        public login: string,
        public password: string,
        public firstName?: string,
        public lastName?: string
    ) {
        this.firstName = firstName || "";
        this.lastName = lastName || "";
    }
}