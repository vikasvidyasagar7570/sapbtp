namespace coustomer.srv;
using {  railwaySystem.db} from '../db/train';
service coustomerSrv {
entity coustomer as projection on db.coustomer;
entity reservation as projection on db.reservation;
entity Tfood as projection on db.Tfood;
entity train as projection on db.train; 

}
