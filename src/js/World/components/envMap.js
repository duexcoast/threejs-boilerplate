import { RGBELoader } from "/node_modules/three/examples/jsm/loaders/RGBELoader.js";
import { EquirectangularReflectionMapping } from "three";
import envMap from "url:/src/assets/textures/red-tower.hdr";

export default function createEnvMap() {
  const rgbeLoader = new RGBELoader();
  const texture = rgbeLoader.load(envMap, function (texture) {
    texture.mapping = EquirectangularReflectionMapping;
  });
  return texture;
}
