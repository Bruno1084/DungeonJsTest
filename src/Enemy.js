import { Actor } from "excalibur";
import { resourses } from "./resourses";

const tilePos = 8

export class Enemy extends Actor{
constructor({x, y}){
    super({ height: 16, width: 16, x: x + tilePos, y: y + tilePos});
    this.health = 5;
    this.type = 'zombie';
  };

  onInitialize(){
    const sprite = resourses.zombie.toSprite();
    this.graphics.use(sprite);
  }




}