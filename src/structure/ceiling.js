import * as BABYLON from "@babylonjs/core";
import earcut from "earcut";
import {japaneseCeilingMaterial} from "../materials/JapaneseThemeMaterials.js"
import {europeanCeilingMaterial} from "../materials/europeanThemeMaterials.js"
import {arabicCeilingMaterial} from "../materials/arabicThemeMaterials.js"
import {secondFloorCeilingMaterial} from "../materials/secondFloorMaterials"


export function createCeiling(scene) {

    const corners = [
        new BABYLON.Vector2(-15, 0),
        new BABYLON.Vector2(-15, -13),
        new BABYLON.Vector2(-13, -15),
        new BABYLON.Vector2(13, -15),
        new BABYLON.Vector2(15, -13),
        new BABYLON.Vector2(15, 0),
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

      const corners4 = [
        new BABYLON.Vector2(-15, 15),
        new BABYLON.Vector2(-15, 6.5),
        new BABYLON.Vector2(-11.5, 6.5),
        new BABYLON.Vector2(-11.5, 0),
        new BABYLON.Vector2(11.5, 0),
        new BABYLON.Vector2(11.5, 6.5),
        new BABYLON.Vector2(15, 6.5),
        new BABYLON.Vector2(15, 15),
      ];

      const corners5 = [
        new BABYLON.Vector2(-15, 6.5),
        new BABYLON.Vector2(-15, 0),
        new BABYLON.Vector2(-11.5, 0),
        new BABYLON.Vector2(-11.5, 6.5),
      ];
      const corners6 = [
        new BABYLON.Vector2(11.5, 6.5),
        new BABYLON.Vector2(11.5, 0),
        new BABYLON.Vector2(15, 0),
        new BABYLON.Vector2(15, 6.5),
      ];

      const mainPoly = new BABYLON.PolygonMeshBuilder(
        "HallFloorCeiling",
        corners,
        scene,
        earcut
      );
      const hallCeiling = mainPoly.build(false, 0.1);
      hallCeiling.position.y = +10;
      hallCeiling.checkCollisions = true ;
        

      const room1Poly = new BABYLON.PolygonMeshBuilder(
        "room1Ceiling",
        corners1,
        scene,
        earcut
      );
      const room1Ceiling = room1Poly.build(false, 0.1);
      room1Ceiling.position.y = +4.3;
      room1Ceiling.checkCollisions = true;
      room1Ceiling.material = japaneseCeilingMaterial(scene)
      room1Ceiling.material.backFaceCulling = false;

      const room2Poly = new BABYLON.PolygonMeshBuilder(
        "room2Ceiling",
        corners2,
        scene,
        earcut
      );
      const room2Ceiling = room2Poly.build(false, 0.1);
      room2Ceiling.position.y = +4.3;
      room2Ceiling.checkCollisions = true;
      room2Ceiling.material = europeanCeilingMaterial(scene)
      room2Ceiling.material.backFaceCulling = false;
    
      const room3Poly = new BABYLON.PolygonMeshBuilder(
        "room3Ceiling",
        corners3,
        scene,
        earcut
      );
      const room3Ceiling = room3Poly.build(false, 0.1);
      room3Ceiling.position.y = +4.3;
      room3Ceiling.checkCollisions = true;
      room3Ceiling.material = arabicCeilingMaterial(scene)
      room3Ceiling.material.backFaceCulling = false;

      const secondFloorPoly = new BABYLON.PolygonMeshBuilder(
        "secondFloor",
        corners4,
        scene,
        earcut
      );
      
      const secondFloorCeiling = secondFloorPoly.build(false, 0.1);
      secondFloorCeiling.position.y = +10;
      secondFloorCeiling.checkCollisions = true;
      secondFloorCeiling.material = secondFloorCeilingMaterial(scene)

      const leftStairsPoly = new BABYLON.PolygonMeshBuilder(
        "leftStairs",
        corners5,
        scene,
        earcut
      );
      
      const leftStairsCeiling = leftStairsPoly.build(false, 0.1);
      leftStairsCeiling.position.y = +10;
      leftStairsCeiling.checkCollisions = true;

      const rightStairsPoly = new BABYLON.PolygonMeshBuilder(
        "rightStairs",
        corners6,
        scene,
        earcut
      );
      
      const rightStairsCeiling = rightStairsPoly.build(false, 0.1);
      rightStairsCeiling.position.y = +10;
      rightStairsCeiling.checkCollisions = true;

}