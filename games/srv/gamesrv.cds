namespace games.srv;
using {  games.db} from '../db/game';
service gamesrv {
entity achivement as projection on db.achivement;
entity game as projection on db.game;
entity gamepublisher as projection on db.gamepublisher;
entity platform as projection on db.platform;
    

}

