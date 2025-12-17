namespace busmanagement.srv;
using {  busmanagement.db} from '../db/bus';
service MyService {
entity bus as projection on db.bus;
entity coustomer as projection on db.coustomer;
entity driver as projection on db.driver;
entity payment as projection on db.payment;  

}


