namespace train.srv;
using { railwaySystem.db } from '../db/train';
service train {
entity train as projection on db.train;   

}

