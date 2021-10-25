import { v4 as uuidV4 } from "uuid";

interface IUserProps {
    name: string;
    email: string;
}
class User {
    id: string;
    name: string;
    admin: boolean;
    email: string;
    created_at: Date;
    updated_at: Date;

    constructor() {
        this.id = uuidV4();
        this.admin = false;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}

export { User, IUserProps };
