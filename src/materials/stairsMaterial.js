import * as BABYLON from "babylonjs";
import {MarbleProceduralTexture} from 'babylonjs-procedural-textures';

export function marbleMaterial(numberOfTilesHeight, numberOfTilesWidth, scene) {
  var marbleMaterial = new BABYLON.StandardMaterial("torus", scene);
  var marbleTexture = new MarbleProceduralTexture("marble", 512, scene);
  marbleTexture.numberOfTilesHeight = numberOfTilesHeight;
  marbleTexture.numberOfTilesWidth = numberOfTilesWidth;
  marbleMaterial.ambientTexture = marbleTexture;
  return marbleMaterial;
}
