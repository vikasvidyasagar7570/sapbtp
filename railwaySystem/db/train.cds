namespace railwaySystem.db;
using { managed } from '@sap/cds/common';
entity train : managed{
    trainId:UUID;
    trainName:String;
    trainType:String;
 
        
}

// entity Header:managed {
//         key id : Integer;
//         toItems : Association[*] to Item on toItems.head.id = id;
//     };

//     entity Item:managed {
//         key id : Integer;
//         head : Association[1] to Header { id };
// }
entity coustomer : managed {
    key coustId:UUID;
    fName:String;
    lName:String;
    gender:Int16;
    contactNo:Int16 ;
    custEmail:String ;
}
entity admin : managed {
    key adminId:UUID;
    fName:String;
    lName:String;
    gender:String;
    age:Int16;
    contactNo:Int16;
    adminEmail:String;  
}


entity trainTicket : managed {
    key ticket_Id:UUID;
    ticketNo:Int16;
    dateAvail:String;
    timeDepart:String;
    destination:String;
    transcationId:Association to transcation on transcationId.transcation_Id=ticketNo;  
}

entity transcation : managed {
   key transcation_Id:UUID;
   trns_name:String;
   resId:UUID;
   coustId:Int16;
   transcDate:String;
}
 
entity reservation : managed {
    key resId:UUID;
    coustId:Int16;
    adminId:Int16;
    ticketId:UUID;
    dateReserve:String;
     
}

// entity specialResrv : managed {
//     key resrvId:UUID;
//     typeof:Association  to reservation on typeof.resId=resrvId;
// }

// entity Cool : managed {
//     coolId : String;
//     coolType:Association to specialResrv on coolType.resrvId=coolId;
// }

entity Tfood : managed {
    foodId:UUID;
    TfoodName:String;
    foodType:String;
}



