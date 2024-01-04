import { Actor, Keys, vec, CollisionType } from 'excalibur';
import { resourses } from './resourses';

const tilePos = 16 + 8;

export class Hero extends Actor{
  constructor(){
    super({ height: 16, width: 16, x: 5 * tilePos, y: 5 * tilePos, collisionType: CollisionType.Active});
    this.health = 15;
    this.attack = 5;
    this.type = 'knight';
    this.weapon = 'sword';
  };

  update(engine){
    super.update(engine);

    if(engine.input.keyboard.wasPressed(Keys.ArrowDown))
      this.moveDown()

    if(engine.input.keyboard.wasPressed(Keys.ArrowUp))
      this.moveUp()

     if(engine.input.keyboard.wasPressed(Keys.ArrowLeft))
      this.moveLeft()

     if(engine.input.keyboard.wasPressed(Keys.ArrowRight))
      this.moveRight()
  }

  onInitialize(){
    const sprite = resourses.hero.toSprite();
    this.graphics.use(sprite);
  }

  moveRight(){
    this.actions.moveBy(vec(16, 0), 200);
    let playerTileX = Math.floor(this.pos.x / 16);
    let playerTileY = Math.floor(this.pos.y / 16);
    console.log(`El jugador está en la posición ${playerTileX}, ${playerTileY} en el gridmap.`);
  }
  moveLeft(){
    this.actions.moveBy(vec(-16, 0), 200);
  }
  moveUp(){
    this.actions.moveBy(vec(0, -16), 200);
  }
  moveDown(){
    this.actions.moveBy(vec(0,16), 200);
  }

  
}