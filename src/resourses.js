import { ImageSource, Loader } from "excalibur";

const loader = new Loader();

const heroSprite = new ImageSource('./src/assets/hero_knight.png');

loader.addResource(heroSprite);

export { loader, heroSprite };
