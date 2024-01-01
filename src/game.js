import { Engine } from 'excalibur';
import { createHero } from './Player';
import { loader, heroSprite } from './resourses';

const game = new Engine();

const hero = createHero();
const sprite = heroSprite.toSprite();
hero.graphics.use(sprite);

game.add(hero);

console.log(hero);
game.start(loader);