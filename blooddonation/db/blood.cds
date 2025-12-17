namespace blooddonation.db;
using {managed  } from '@sap/cds/common';
entity blood : managed {
    blood_id:UUID;
    bloodgroup:String;
}
entity donor : managed {
    donorid:UUID;
    dname:String;
    age:String;
    gender:String;
    diseases:String;
    contactNo:Int16;
    bloodgroup:String;
    blood_id:Association to blood;
}

entity bloodbank : managed {
    bbank_id:UUID;
    bname:String;
}
entity receptionist : managed{
    receptionistId:UUID;
    email:String;
    name:String;
}