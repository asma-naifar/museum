import * as BABYLON from "@babylonjs/core";
import {corner,wall,win,buildFromPlan,windowSpace,door,doorSpace,} from "./customMesh/buildMeshFomPlan.js";
import { createRoof } from "./roof.js";

export function createBuilding(scene) {
  var exteriorBaseData = [-13, -15, 13, -15, 15, -13, 15, 15, -15, 15, -15, -13];
  var baseData = [-12.9, -14.9, 12.9, -14.9, 14.9, -12.9, 14.9, 14.9, -14.9, 14.9, -14.9, -12.9];
  
  var corners = [];
  var exteriorCorners = [];
  
  for (let b = 0; b < baseData.length / 2; b++) {
    corners.push(new corner(baseData[2 * b], baseData[2 * b + 1]));
  }

  for (let b = 0; b < exteriorBaseData.length / 2; b++) {
    exteriorCorners.push(new corner(exteriorBaseData[2 * b], exteriorBaseData[2 * b + 1]));
  }

  var d = new door(6, 7);
  var ds = new doorSpace(d, 10);

  var windowHall = new win(2, 6);

  var windowSpace2O = new windowSpace(windowHall, 2, 2);
  var windowSpace21 = new windowSpace(windowHall, 5, 2);

  var windowSpace40 = new windowSpace(windowHall, 25, 2);
  var windowSpace41 = new windowSpace(windowHall, 22, 2);

  /*
   * 
   */
  var ds2 = new doorSpace(d, 10.1);

  var windowSpace2O2 = new windowSpace(windowHall, 2.1, 2);
  var windowSpace212 = new windowSpace(windowHall, 5.1, 2);

  var windowSpace402 = new windowSpace(windowHall, 25.1, 2);
  var windowSpace412 = new windowSpace(windowHall, 22.1, 2);

  var walls = [];
  for (let c = 0; c < corners.length; c++) {
    walls.push(new wall(corners[c]));
  }

  var exteriorWalls = [];
  for (let c = 0; c < exteriorCorners.length; c++) {
    exteriorWalls.push(new wall(exteriorCorners[c]));
  }

  walls[2].windowSpaces = [windowSpace2O, windowSpace21];
  walls[4].windowSpaces = [windowSpace40, windowSpace41];

  walls[0].doorSpaces = [ds];


  exteriorWalls[2].windowSpaces = [windowSpace2O2, windowSpace212];
  exteriorWalls[4].windowSpaces = [windowSpace402, windowSpace412];

  exteriorWalls[0].doorSpaces = [ds2];

  var ply = 0.5;
  var height = 10;

  var house = buildFromPlan(
    walls,
    0.1,
    height,
    {
      interiorUV: new BABYLON.Vector4(0.05, 0, 10, 10),
      exteriorUV: new BABYLON.Vector4(0.05, 0, 12, 12),
    },
    scene
  );

  var exteriorHouse = buildFromPlan(
    exteriorWalls,
    ply,
    height,
    {
      interiorUV: new BABYLON.Vector4(0.05, 0, 10, 10),
      exteriorUV: new BABYLON.Vector4(0.05, 0, 12, 12),
    },
    scene
  );

  let mat = new BABYLON.StandardMaterial("", scene);
  mat.diffuseTexture = new BABYLON.Texture(
    "./assets/textures/japanese-ceiling.jpg",
    scene
  );

  let exteriorMat = new BABYLON.StandardMaterial("", scene);
  exteriorMat.diffuseTexture = new BABYLON.Texture(
    "/assets/textures/murs.jpg",
    scene
  );

  let roofMat = new BABYLON.StandardMaterial("", scene);
  roofMat.diffuseTexture = new BABYLON.Texture(
    "/assets/textures/roof.jpg",
    scene
  );


  house.material = mat;
  house.checkCollisions = true;

  exteriorHouse.material = exteriorMat;
  exteriorHouse.checkCollisions = true;

  var roofApexData = [0, -13,  0, 13];

  let roof = createRoof(corners, roofApexData, height, ply, scene);
  roof.checkCollisions = true;
  roof.material = roofMat
}
