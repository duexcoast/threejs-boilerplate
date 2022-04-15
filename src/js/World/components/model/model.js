import { GLTFLoader } from "/node_modules/three/examples/jsm/loaders/GLTFLoader";

import setupModel from "./setupModel";
import matchaquila from "url:/src/assets/models/matchaquila.glb";

export default async function loadCan() {
  const loader = new GLTFLoader();

  const canData = await loader.loadAsync(matchaquila);

  const can = setupModel(canData);

  return { can };
}
