namespace bookstore.db;
// using { managed } from '@sap/cds/common';


entity Books  {
    key book_id:UUID;
    title:String;
    isbn:String;
    price:Decimal(10, 2);
    publish_date:String;
    publisher_id:Association to Publisher;
    stock:Integer;
}
entity Orders  {
    key order_id:UUID;
    coust_id:Association to Coustomers;
    book_id:Association to Books;
    order_date:String;
    status:String;
    total_amount:Decimal(10, 2);
    quantity:Integer;
}

entity Authors  {
    key author_id:UUID;
    name:String;
    bio:String;
    birth_date:String;
    nationality:String
}
entity Publisher  {
    key publisher_id: UUID;
    name:String;
    country:String;
    founded_year:Integer;
    website:String
}
entity Generes  {
    key genere_id:UUID;
   
}
entity Book_Generes  {
    key book_id:Association to Books;
    genere_id:Association to Generes;
 
}
entity Coustomers  {
    key coust_id:UUID;
    first_name:String;
    last_name:String;
    email:String;
    phone:String(20);
    
}
entity Address  {
    key address_id: UUID;
    coust_id:Association to Coustomers;
    street:String;
    city:String;
    state:String;
    postal_code:String;   
}

entity Order_items  {
    key order_item_id:UUID;
    order_id:Association to Orders;
    book_id:Association to Books;
    quantity:Integer;
    unit_price:Decimal(10, 2)
}
entity Payments  {
    key payment_id:UUID;
    order_id:Association to Orders;
    payment_method:String;
    payment_date:String;
    amount:Decimal;
    status:String
}
entity Invoices {
    key invoice_id:UUID;
    order_id:Association to Orders;
    invoice_date:String;
    due_date:String;
    total_amount:Decimal(10, 2)
}
entity Shipments  {
    key shipment_id:UUID;
    order_id:Association to Orders;
    shipment_date:String;
    delivery_date:String;
    carrier:String;
    tracking_number:String;
}
entity Reviews {
    key Review_id:UUID;
    book_id:Association to Books;
    coust_id:Association to Coustomers;
    Review_text:String;
    Review_date:String; 
}
entity Discounts {
    key discount_id:UUID;
    discount_name:String;
    discount_type:String;
    discount_value:Decimal(10, 2);
    valid_from:String;
    valid_to:String
}
entity Stores  {
    key store_id:UUID;
    store_name:String;
    location:String;
    manager_name:String;
    contactNo:String(20)
}