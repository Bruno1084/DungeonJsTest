import { Actor, Color } from "excalibur";

class Player extends Actor{
  constructor({health, attack, weapon, x, y}){
    super({ x, y, width: 50, height: 50, color: Color.DarkGray }),
    this.health = health,
    this.attack = attack,
    this.weapon = weapon,
    this.vel.x = 15
  }


  setWeapon(weapon){
    this.weapon = weapon;
  }

  setAttacked(attack){
    this.health -= attack;
  }

  setHealth(health){
    this.health+= health;
  }


  
}

export { Player }