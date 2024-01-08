import { TileMap, vec } from "excalibur";
import { resourses } from "./resourses";

class GridMap extends TileMap{
  constructor({x= 0, y= 0}){
    super({
      rows: 10,
      columns: 10,
      tileWidth: 16,
      tileHeight: 16,
      pos: vec(x, y)
    });
  }

  onInitialize(){
    for (let cell of this.tiles) {
      let sprite;
      // Verifica si la celda está en el borde izquierdo, derecho, superior o inferior
      if(cell.x === 0 || cell.x === 9 || cell.y === 0 || cell.y === 9){
        sprite = resourses.wall.toSprite();
        cell.addGraphic(sprite)
        cell.solid = true
      }else{
        sprite = resourses.floor.toSprite();
        cell.addGraphic(sprite);
      }
    }
  }

}

export { GridMap }