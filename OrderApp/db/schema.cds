namespace Order.db;
using { cuid,managed,localized } from '@sap/cds/common';

@requires:'authenticated-user'
entity Order @(restrict:[
    {grant: 'READ',to:'authenticated-user'},
    {grant: 'CREATE',to:'Customer'},
    {grant: 'UPDATE',to: 'Admin'},
    {grant: 'DELETE',to:'Admin'}
]){
    key ID:UUID;
    coustomerID:String;
    orderDate:Date;
    totalAmount:Decimal(10, 2);
    items:Composition of many OrderItem on items.orderId=$self;
}
@requires:'authenticated-user'
entity OrderItem @(restrict:[
    {grant: 'READ',to:'authenticated-user'},
    {grant: 'CREATE',to:'Customer'},
    {grant: 'UPDATE',to: 'Admin'},
    {grant: 'DELETE',to:'Admin'}
]){
    key ID:UUID;
    orderId:Association to Order;
    productName:localized String;
    quantity:Integer;
    unitPrice:Decimal(10, 2);
    totalPrice:Decimal(10, 2)
}
