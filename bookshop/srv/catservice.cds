using {  sap.capire.bookshop as my} from '../db/schema';
namespace bookshop.srv;
service CatalogService @(path:'/browse'){

    @readonly entity Books as select from my.Books{*,
    author.name as author
    }excluding{ createdBy,modifiedBy };
    @requires:'authenticated-user'
    action submitOrder (book: Books:Id, quantity:Integer);
}

