import * as BABYLON from "@babylonjs/core";

export function createDoor(name, scene) {
  const door = new BABYLON.MeshBuilder.CreateBox(
    name,
    { width: 3.2, height: 4.2, depth: 0.1 },
    scene
  );
  const mat = new BABYLON.StandardMaterial("glass-texture", scene);
  mat.ambientTexture = new BABYLON.Texture("./assets/textures/glass-texture.jpg", scene);
  
  mat.ambientTexture.uScale = 1.0;
  mat.ambientTexture.vScale = 1.0;

  door.material = mat
  door.position.y = 2.1
  door.position.z = -0.2
  door.checkCollisions = true;
  return door
}
