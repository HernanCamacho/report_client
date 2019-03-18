export class Report{
    constructor(
        public latitude: string,
        public longitude: string,
        public evidence: string,
        public comments: string,
        public department_id: number,
        public user_id: number
    ){}
}
