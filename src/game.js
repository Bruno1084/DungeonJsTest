import { Camera, Engine } from 'excalibur';
import { loader } from './resourses';
import { Hero } from './Player';
import { GridMap } from './GridMap';


const game = new Engine();

const hero = new Hero();

const gridMap = new GridMap();


gridMap.addChild(hero)
game.add(gridMap);

// game.currentScene.camera.zoom = 1.5    
game.currentScene.camera.strategy.lockToActor(hero);

game.start(loader);

export { Engine };