namespace bankmanagement.db;
using {managed  } from '@sap/cds/common';
entity bank : managed {
   bank_id:UUID;
   bank_name:String;
   adress:String; 
}
entity coustomer : managed {
    coust_id:UUID;
    name:String;
    adress:String;
    contactNo:Int16;
    username:String;
    password:String;

}
entity benificiary : managed {
    beneficiary_id:UUID;
    coust_id:Association  to coustomer;
    name:String;
    accntNo:Association  to account;
}
entity account : managed {
    accntNo:UUID;
    coust_id:Association  to coustomer;
    type:String;
    balance:Decimal(20, 4)
}


