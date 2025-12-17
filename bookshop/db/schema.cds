using { Currency,managed,sap } from '@sap/cds/common';
namespace sap.capire.bookshop;
entity Books : managed {
    key Id:Integer;
    title:localized String(111);
    desc:localized String(1111);
    author:Association to Authors;
    genre:Association to Genres;
    stock:Integer;
    price:Decimal(9, 2);
    currency:Currency;
    
}
entity Authors : managed {
    key Id:Integer;
    name:String;
    books:Association to many Books on books.author=$self;
}
entity Genres : sap.common.CodeList{
    key Id: Integer;
    parent: Association to Genres;
    children: Composition of many Genres on children.parent=$self; 
}