import { Camera, Engine, vec } from 'excalibur';
import { loader } from './resourses';
import { Hero } from './Player';
import { GridMap } from './GridMap';


const game = new Engine();

const gridMap = new GridMap({x: 0, y: 0});
// console.log(gridMap.getTileByPoint(vec(16, 16)))

const hero = new Hero(gridMap, 1, 2);


gridMap.addChild(hero);
game.add(gridMap);


game.currentScene.camera.zoom = 1.5    
game.currentScene.camera.strategy.lockToActor(hero);

game.start(loader);

export { game }