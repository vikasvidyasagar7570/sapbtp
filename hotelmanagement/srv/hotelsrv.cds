namespace hotelmanagement.srv;
using {hotelmanagement.db  } from '../db/hotel';
service hotelservice {
entity coustomer as projection on db.coustomer;
entity employee as projection on db.employee;
entity hotel as projection on db.hotel;
entity payment as projection on db.payment;
}

