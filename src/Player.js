import { Actor, Keys, vec } from 'excalibur';
import { resourses } from './resourses';

const tilePos = 16 + 8;

export class Hero extends Actor{
  constructor(){
    super({ height: 16, width: 16, x: 5 * tilePos, y: 5 * tilePos, z: 1});
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
    this.pos.x+= 16;
  }
  moveLeft(){
    this.pos.x -= 16;
  }
  moveUp(){
    this.pos.y -= 16;
  }
  moveDown(){
    this.pos.y += 16;
  }

  
}