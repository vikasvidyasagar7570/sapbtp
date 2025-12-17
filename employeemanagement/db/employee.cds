namespace employeemanagement.db;
using { managed } from '@sap/cds/common';
entity employee : managed {
    emp_id:UUID;
    fname:String;
    lname:String;
    age:Int16;
    gender:String;
}
entity qualification : managed {
    qual_id:UUID;
    emp_id:Association to employee;
    position:String;
    date_in:String;
}
entity jobDepart : managed {
    job_id:UUID;
    job_depart:String;
    name:String;
    description:String;
}
entity leave : managed {
    leave_id: UUID;
    emp_id: Association  to employee;
    date: String;
}

