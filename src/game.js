import { Camera, Engine } from 'excalibur';
import { loader } from './resourses';
import { Hero } from './Player';
import { Enemy } from './Enemy';
import { GridMap } from './GridMap';


const game = new Engine();

const hero = new Hero();

const zombie = new Enemy({x: 2, y: 0})

const gridMap = new GridMap();


gridMap.addChild(hero);
gridMap.addChild(zombie);

game.add(gridMap);


game.currentScene.camera.zoom = 1.5    
game.currentScene.camera.strategy.lockToActor(hero);

game.start(loader);

export { Engine}