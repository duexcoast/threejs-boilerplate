import { MathUtils } from "three";

export default function setupModel(data) {
  const model = data.scene.children[0];

  // For more complex Tick Function
  // const rads = Math.Utils.degToRad(-155);

  model.tick = () => (model.rotation.y += 0.01);

  return model
}

