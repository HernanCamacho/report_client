export class Report{
    constructor(
        public latitude: string,
        public longitude: string,
        public evidence,
        public comments: string,
        public department_id: string,
        public user_id: string
    ){}
}
