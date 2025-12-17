namespace hospitalmanagement.db;
using { managed } from '@sap/cds/common';
entity hospital : managed {
    hosp_id:UUID;
    hosp_name:String;
    adress:String
}
entity doctor : managed {
    doctor_id:UUID;
    fname:String;
    lName:String;
    department:String
}
entity patient : managed {
    patient_id:UUID;
    fname:String;
    lName:String;
    dob:String;
    gender:String;
    adress:String;
}
entity bill : managed {
    bill_id:UUID;
    patient_id:Association to patient;
    amount:Int16;
}

