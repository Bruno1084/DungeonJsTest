import { Actor } from "excalibur";

const tilePos = 16 + 8;

export class Enemy extends Actor(){
  constructor(){
    super({ height: 16, width: 16, x: 5 * tilePos, y: 5 * tilePos, z: 1});
    this.health = 5;
    this.type = 'zombie';
  };

  



}