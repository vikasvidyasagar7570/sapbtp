namespace admin.srv;
using {  railwaySystem.db} from '../db/train';
service adminSrv {
entity train as projection on db.train; 
}




