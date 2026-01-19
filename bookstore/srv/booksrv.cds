namespace bookstore.srv;
using { bookstore.db } from '../db/schema';
service booksrervice {
entity Books as projection on db.Books;
entity Authors as projection on db.Authors;
entity Publisher as projection on db.Publisher;
entity generes as projection on db.Generes;
entity Book_Generes as projection on db.Book_Generes;
entity Coustomers as projection on db.Coustomers;
entity Address as projection on db.Address;
entity Orders as projection on db.Orders;
entity Order_items as projection on db.Order_items;
entity Payments as projection on db.Payments;
entity Invoices as projection on db.Invoices;
entity Shipments as projection on db.Shipments;
entity Reviews as projection on db.Reviews;
entity Discounts as projection on db.Discounts;  
entity Stores as projection on db.Stores;

action placeOrder(
    book_id:UUID,
    coust_id:UUID,
    quantity:Integer

)returns{
    order_id:UUID;
    status:String;
    remaining_stock:Integer;
}

action addStock(
    book_id:UUID,
    add_quantity:Integer,
)returns{
    book_id:UUID;
    new_stock:Integer
}


function checkStock(book_id:UUID) returns Integer;
}

