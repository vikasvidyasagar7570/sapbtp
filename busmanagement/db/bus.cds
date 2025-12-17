namespace busmanagement.db;
using { managed } from '@sap/cds/common';
entity bus : managed {
    bus_id:UUID;
    bus_number:String;
    bus_status:String;
    driver_id:Association  to driver;
}
entity driver : managed {
    driver_id:UUID;
    name:String;
    bus_id:Association to bus;

}
entity coustomer : managed {
    coust_id:UUID;
    coust_name:String;
    gender:String;
    contactNo:Int16;
}
entity payment : managed {
    pay_id:UUID;
    coust_id:Association  to coustomer;
    payment_date:String;
}


