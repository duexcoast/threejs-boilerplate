import "./stylesheets/main.scss";

import Sketch from "./js/Sketch.js";

import World from "./js/World/World";

const container = {
  dom: document.getElementById("container"),
};

// ####################### SHADER SET UP #######################
// function app() {
//   const sketch = new Sketch({
//     dom: document.getElementById("container"),
//   });
// }

// app();

// ####################### LOAD GLTF SETUP #######################
async function main() {
  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();

  // start the animation loop
  world.start();

  // start the gsap animations
  // startAnimations();
}
main().catch((err) => {
  console.error(err);
});
