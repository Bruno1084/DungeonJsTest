import { TileMap } from "excalibur";
import { resourses } from "./resourses";


class GridMap extends TileMap{
  constructor(){
    super({
      rows: 16,
      columns: 16,
      tileWidth: 16,
      tileHeight: 16,
    });
  }

  onInitialize(){
    for (let cell of this.tiles) {
      let sprite;
      if(cell.x === 0){
        sprite = resourses.wall.toSprite();
        cell.addGraphic(sprite)
      }else{
        sprite = resourses.floor.toSprite();
        cell.addGraphic(sprite);
      }
    }
  }

  
}

export { GridMap }