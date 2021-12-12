import * as BABYLON from "@babylonjs/core";
import earcut from "earcut";

import { japaneseFloorMaterial } from "../materials/JapaneseThemeMaterials";
import { europeanFloorMaterial } from "../materials/europeanThemeMaterials";
import { arabicFloorMaterial } from "../materials/arabicThemeMaterials";
import { mainHallFloorMaterial } from "../materials/mainHallMaterials";


export function createFloors(scene) {
  const corners = [
    new BABYLON.Vector2(-14.9, 0),
    new BABYLON.Vector2(-14.9, -12.9),
    new BABYLON.Vector2(-12.9, -14.9),
    new BABYLON.Vector2(12.9, -14.9),
    new BABYLON.Vector2(14.9, -12.9),
    new BABYLON.Vector2(14.9, 0),
  ];

  const corners1 = [
    new BABYLON.Vector2(-15, 15),
    new BABYLON.Vector2(-15, 6.5),
    new BABYLON.Vector2(-11.5, 6.5),
    new BABYLON.Vector2(-11.5, 0),
    new BABYLON.Vector2(-4, 0),
    new BABYLON.Vector2(-4, 15),
  ];
  const corners2 = [
    new BABYLON.Vector2(-4, 15),
    new BABYLON.Vector2(-4, 0),
    new BABYLON.Vector2(4, 0),
    new BABYLON.Vector2(4, 15),
  ];

  const corners3 = [
    new BABYLON.Vector2(4, 15),
    new BABYLON.Vector2(4, 0),
    new BABYLON.Vector2(11.5, 0),
    new BABYLON.Vector2(11.5, 6.5),
    new BABYLON.Vector2(15, 6.5),
    new BABYLON.Vector2(15, 15),
  ];

  const mainPoly = new BABYLON.PolygonMeshBuilder(
    "HallFloor",
    corners,
    scene,
    earcut
  );
  const hallFloor = mainPoly.build(false, 0.2);
  hallFloor.position.y = +0.1;
  hallFloor.checkCollisions = true;
  hallFloor.receiveShadows = true;
  hallFloor.material = mainHallFloorMaterial(scene);
  hallFloor.receiveShadows = true
  
  const room1Poly = new BABYLON.PolygonMeshBuilder(
    "room1",
    corners1,
    scene,
    earcut
  );
  const room1 = room1Poly.build(false, 0.2);
  room1.position.y = +0.1;
  room1.checkCollisions = true;
  room1.receiveShadows = true;
  room1.material = japaneseFloorMaterial(scene);

  const room2Poly = new BABYLON.PolygonMeshBuilder(
    "room2",
    corners2,
    scene,
    earcut
  );
  const room2 = room2Poly.build(false, 0.2);
  room2.position.y = +0.1;
  room2.checkCollisions = true;
  room2.receiveShadows = true;
  room2.material = europeanFloorMaterial(scene);

  const room3Poly = new BABYLON.PolygonMeshBuilder(
    "room3",
    corners3,
    scene,
    earcut
  );
  const room3 = room3Poly.build(false, 0.2);
  room3.position.y = +0.1;
  room3.checkCollisions = true;
  room3.receiveShadows = true;
  room3.material = arabicFloorMaterial(scene);
}
