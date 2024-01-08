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
          else{console.log('There is a wall at left')}
          break;

          case Keys.ArrowRight:
            if(!this.grid.getTileByPoint(vec(this.pos.x + 16, this.pos.y)).solid){
              dir = Vector.Right;
              this.moveRight()
            }
            else{console.log('There is a wall at right')}
            break;

          case Keys.ArrowDown:
            if(!this.grid.getTileByPoint(vec(this.pos.x, this.pos.y + 16)).solid){
              dir = Vector.Down;
              this.moveDown();
            }
            else{console.log('There is a wall below')}
            break;

          case Keys.ArrowUp:
            if(!this.grid.getTileByPoint(vec(this.pos.x, this.pos.y - 16)).solid){
              dir = Vector.Up;
              this.moveUp();
            }
            else{console.log('There is a wall above')}
            break;

          default:
            return;          
      }
    })
  }  


  moveRight(){
    this.pos.x += 16;
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