namespace hotelmanagement.db;
using { managed} from '@sap/cds/common';
entity hotel : managed {
    hotelId:UUID;
    hotelName:String;
    adress:String;
}
entity employee : managed {
    employeeId:UUID;
    employeeName:String;
    job_depart:String;
    contactNo:Int16;
}
entity coustomer : managed {
    coust_id:UUID;
    coust_name:String;
    phoneNo:Int16;
}
entity payment : managed {
    pay_id:UUID;
    coustomer_name:String;
    paymentDate:String;

}
entity Books : managed {
    book_id:UUID;
    title:String;
}

// extend Books with {
//    someAdditionalField : String;
// }

// annotate Books with @some.entity.level.annotations {
//   title @some.field.level.annotations;
// };
