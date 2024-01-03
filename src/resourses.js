import { ImageSource, Loader } from "excalibur";

const loader = new Loader();
loader.suppressPlayButton = true;


const resourses = {
  hero: new ImageSource('./src/assets/hero_knight.png'),
  floor: new ImageSource('./src/assets/floor_plain.png'),
  wall: new ImageSource('./src/assets/wall_center.png'),
  zombie: new ImageSource('./src/assets/monster_zombie.png')
};

for(let res in resourses){
  loader.addResource(resourses[res]);
}



export { loader, resourses };


