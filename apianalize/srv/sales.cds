using { external} from './external/schema';
service SalesService {
entity SalesContract as projection on external.SalesContract;
    

}
