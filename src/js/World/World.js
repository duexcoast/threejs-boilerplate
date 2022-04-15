import * as THREE from "three";

import loadCan from "./components/model/model.js";
import { createCamera } from "./components/camera.js";
import createEnvMap from "./components/envMap.js";
import createLights from "./components/lights.js";
import createScene from "./components/scene.js";

import createControls from "./systems/controls.js";
import createRenderer from "./systems/renderer.js";
import Resizer from "./systems/Resizer.js";
import Loop from "./systems/Loop.js";

let camera;
let envMap;
let renderer;
let scene;
let loop;

export default class World {
  constructor(options) {
    this.container = options.dom;

    camera = createCamera();
    envMap = createEnvMap();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);
    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.environment = envMap;
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { can } = await loadCan();
    // const texture = createEnvMap();

    // send can to animation loop
    loop.updatables.push(can);
    scene.add(can);
  }
  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}
