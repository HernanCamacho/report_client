export class ReportAttended{
    constructor(
        public evidence: string,
        public comments: string,
        public report_id: number,
        public user_employee_id: number
    ){}
}
