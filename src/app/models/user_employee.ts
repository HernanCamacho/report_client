export class UserEmployee{
    constructor(
        public first_name: string,
        public last_name: string,
        public email: string,
        public worker_number: string,
        public password: string,
        public department_id: number,
        public role_id: number
    ){}
}
