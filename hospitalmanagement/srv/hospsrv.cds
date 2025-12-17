namespace hospitalmanagement.srv;
using {  hospitalmanagement.db} from '../db/hospital';
service MyService {

    entity bill as projection on db.bill;
    entity doctor as projection on db.doctor;
    entity hospital as projection on db.hospital;
    entity patient as projection on db.patient;

}

