namespace student.db;
using {managed} from '@sap/cds/common';
entity student:managed{
    key id:UUID;
     name:String;
     email:String;
     phonNo:Int16;
     age:Int16;
}
entity college : managed {
    key collegeId:UUID;
    name:String;
    adress:String;
}
entity subjects : managed {
    key subId:UUID;
    subName:String;
}
entity course : managed {
    key courseId:UUID;
    courseName:String; 
}


