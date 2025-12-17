namespace games.db;
using { managed } from '@sap/cds/common';
entity game : managed {
    game_id:UUID;
    game_name:String;
}
entity achivement : managed {
    achvId:UUID;
    game_id:Association to game;

}
entity gamepublisher : managed {
    publisherId:UUID;
    game_id:Association to game;
}

entity platform : managed {
    platformId:UUID;
    platformName:String;
    publisherId:Association to gamepublisher;
}


