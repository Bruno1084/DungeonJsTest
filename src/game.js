import { Engine } from 'excalibur';
import { Player } from './Player';

const game = new Engine({
  width: 600,
  height: 600,
});

const hero = new Player({
  health: 15,
  attack: 2,
  weapon: "sword",
  x: 10,
  y: 10
});



game.add(hero);
game.start();