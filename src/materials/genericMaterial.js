import * as BABYLON from "@babylonjs/core";

export function glassMaterial(scene) {

  var pbr = new BABYLON.PBRMaterial("pbr", scene);

  pbr.metallic = 0.0;
  pbr.roughness = 0;

  pbr.subSurface.isRefractionEnabled = true;
  pbr.subSurface.indexOfRefraction = 1.8;

  return pbr;
}

export function woodMaterial(scene) {
  const mat = new BABYLON.StandardMaterial("japaneseTile", scene);
  mat.ambientTexture = new BABYLON.Texture("./assets/textures/wood.jpg", scene);

  mat.ambientTexture.uScale = 10.0;
  mat.ambientTexture.vScale = 10.0;

  return mat;
}
