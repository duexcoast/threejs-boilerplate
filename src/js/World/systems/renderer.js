import { WebGLRenderer, ACESFilmicToneMapping, sRGBEncoding } from "three";

export default function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });

  renderer.physicallyCorrectLights = true;

  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;
  renderer.outputEncoding = sRGBEncoding;
  renderer.setClearColor(0x000000, 0);

  return renderer;
}
