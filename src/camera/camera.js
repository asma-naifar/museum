import * as BABYLON from "@babylonjs/core";

export function createCamera(scene, canvas) {
  const camera = new BABYLON.UniversalCamera(
    "Camera",
    new BABYLON.Vector3(0, 1.7, -30),
    scene
  );
  camera.setTarget(new BABYLON.Vector3(0.0, 0.7, 0.0));

  camera.keysUp = [90, 38];
  camera.keysDown = [40, 83];
  camera.keysLeft = [81, 37];
  camera.keysRight = [68, 39];
  camera.attachControl(canvas);
  camera.inertia = 0.01;
  camera.angularSensibility = 1000;


  //Then apply collisions and gravity to the active camera
  camera.checkCollisions = true;
  camera.collisionRadius = new BABYLON.Vector3(0.1, 0.1, 0.1);

  //Set the ellipsoid around the camera (e.g. your player's size)
  camera.ellipsoid = new BABYLON.Vector3(1.3, 1, 1.3);
  
  return camera;
  
}
