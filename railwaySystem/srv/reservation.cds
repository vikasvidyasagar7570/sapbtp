namespace reservation.srv;
using {  railwaySystem.db} from '../db/train';
service reservation {
entity reservation as projection on db.reservation;
    

}


