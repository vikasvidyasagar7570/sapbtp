namespace employeemanagement.srv;
using { employeemanagement.db } from '../db/employee';
service MyService {

    entity employee as projection on db.employee;
    entity jobDepart as projection on db.jobDepart;
    entity leave as projection on db.leave;
    entity qualification as projection on db.qualification;

}


