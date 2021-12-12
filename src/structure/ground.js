import * as BABYLON from "@babylonjs/core";

export function createGound(name, width, depth, asset, scene) {

  let floor = BABYLON.Mesh.CreateGround(name, width, depth, 2.0, scene)

  floor.material = new BABYLON.StandardMaterial("blanc", scene)
  
  floor.material.diffuseTexture = new BABYLON.Texture(asset, scene)
  floor.material.specularTexture = new BABYLON.Texture(asset, scene)
  floor.material.emissiveTexture = new BABYLON.Texture(asset, scene)
  floor.material.ambientTexture = new BABYLON.Texture(asset, scene)

  floor.material.diffuseTexture.uScale = 10.0
  floor.material.diffuseTexture.vScale = 10.0

  floor.material.specularTexture.uScale = 10.0
  floor.material.specularTexture.vScale = 10.0

  floor.material.emissiveTexture.uScale = 10.0
  floor.material.emissiveTexture.vScale = 10.0

  floor.material.ambientTexture.uScale = 10.0
  floor.material.ambientTexture.vScale = 10.0

  floor.receiveShadows = true;
  floor.checkCollisions = true;
  floor.metadata = { type: "ground" }
}
