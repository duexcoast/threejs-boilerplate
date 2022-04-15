import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";

export default function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  controls.enableDamping = true;
  // controls.minDistance = 1;
  // controls.maxDistance = 20;
  controls.enableZoom = false;

  // forward controls.update to our custom .tick method
  controls.tick = () => controls.update();

  return controls;
}
