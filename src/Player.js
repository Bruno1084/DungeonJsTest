import { Actor, Keys, CollisionType, Vector, vec } from 'excalibur';
import { resourses } from './resourses';
import { GridMap } from './GridMap';


export class Hero extends Actor{
  constructor(grid, tileX, tileY){
    super({ 
      height: 16, 
      width: 16, 
      x: grid.getTile(tileX, tileX).pos.x + 8, 
      y: grid.getTile(tileY, tileY).pos.y + 8, 
      collisionType: CollisionType.Active,
      name: 'Knight'
    });
    this.grid = grid;
    this.tileX = tileX;
    this.tileY = tileY;
    this.health = 15;
    this.attack = 5;
    this.weapon = 'sword';
  };

  onInitialize(engine){
    const sprite = resourses.hero.toSprite();
    this.graphics.use(sprite);

    engine.input.keyboard.on('press', (evt) => {
      let dir;
      switch(evt.key){
        case Keys.ArrowLeft:
          if(!this.grid.getTileByPoint(vec(this.pos.x - 16, this.pos.y)).solid){
            dir = Vector.Left;
            this.moveLeft();
          }
          break;

          case Keys.ArrowRight:
            if(!this.grid.getTileByPoint(vec(this.pos.x + 16, this.pos.y)).solid){
              dir = Vector.Right;
              this.moveRight()
            }
            break;

          case Keys.ArrowDown:
            if(!this.grid.getTileByPoint(vec(this.pos.x, this.pos.y + 16)).solid){
              dir = Vector.Down;
              this.moveDown();
            }
            break;

          case Keys.ArrowUp:
            if(!this.grid.getTileByPoint(vec(this.pos.x, this.pos.y - 16)).solid){
              dir = Vector.Up;
              this.moveUp();
            }
            break;

          default:
            return;          
      }
    })
  }  


  moveRight(){
    this.actions.moveBy(vec(16, 0), 200);
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