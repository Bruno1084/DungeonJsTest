import { Actor, Color } from "excalibur";

const player = new Actor({
  name: "player",
  width: 50,
  height: 50,
  color: Color.Red,
});

player.vel.x = 15;

export { player }