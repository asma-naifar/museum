import * as BABYLON from "@babylonjs/core";
import earcut from "earcut";
import {secondFloorMaterial} from "../materials/secondFloorMaterials"


export function createSecondFloor(scene) {
  const corners = [
    new BABYLON.Vector2(-15, 15),
    new BABYLON.Vector2(-15, 6.4),
    new BABYLON.Vector2(-11.6, 6.4),
    new BABYLON.Vector2(-11.6, 0),
    new BABYLON.Vector2(11.6, 0),
    new BABYLON.Vector2(11.6, 6.4),
    new BABYLON.Vector2(15, 6.4),
    new BABYLON.Vector2(15, 15),
  ];

  const poly_tri = new BABYLON.PolygonMeshBuilder(
    "secondFloor",
    corners,
    scene,
    earcut
  );
  const polygon = poly_tri.build(false, 0.1);
  polygon.position.y = +5.1;
  polygon.checkCollisions = true;
  polygon.material = secondFloorMaterial(scene);
  return polygon;
}
