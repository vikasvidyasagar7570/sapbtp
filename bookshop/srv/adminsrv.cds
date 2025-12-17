namespace bookshop.srv;
using { sap.capire.bookshop as my } from '../db/schema';
service adminservice @(requires:'authenticated-user') {
entity books as projection on my.Books;
entity Authors as projection on my.Authors;
    

}

