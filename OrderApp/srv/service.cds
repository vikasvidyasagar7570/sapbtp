namespace OrderApp.srv;
using { Order.db} from '../db/schema';
service OrderService {

    entity Order as projection on db.Order;
    entity OrderItem as projection on db.OrderItem;

}


