import { Actor } from 'excalibur';

export function createHero(){
  const hero = new Actor({
    name: 'Knight',
    height: 16,
    width: 16,
    x: 10,
    y: 10
  })

  hero.vel.x = 15;




  return hero;
}