namespace blooddonation.srv;
using { blooddonation.db } from '../db/blood';
service bloodService {

    entity blood as projection on db.blood;
    entity bloodbank as projection on db.bloodbank;
    entity donor as projection on db.donor;
    entity receptionist as projection on db.receptionist;

}

