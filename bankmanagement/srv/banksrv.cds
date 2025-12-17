namespace bankmanagement.srv;
using {bankmanagement.db} from '../db/bank';
service bankService {
entity account as projection on db.account;
entity bank as projection on db.bank;
entity benificiary as projection on db.benificiary;
entity coustomer as projection on db.benificiary;
    

}


