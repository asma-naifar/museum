import * as BABYLON from "@babylonjs/core";
import { japaneseWallsMaterial } from "../materials/JapaneseThemeMaterials.js";
import { europeanWallsMaterial } from "../materials/europeanThemeMaterials.js";
import { arabicWallsMaterial } from "../materials/arabicThemeMaterials.js";
import { mainHallSeperationMateraial } from "../materials/mainHallMaterials";

import {
  corner,
  wall,
  buildFromPlan,
  win,
  windowSpace,
  door,
  doorSpace,
} from "./customMesh/buildMeshFomPlan.js";

export function createInteriorSeparation(scene) {
  const separation1 = [-3.8, 14, -3.8, 0.2, 3.8, 0.2, 3.8, 14];

  const separation21 = [
    -4.2, 14, -14, 14, -14, 6.5, -11.5, 6.5, -11.5, 0.2, -4.2, 0.2,
  ];
  const separation22 = [
    4.2, 14, 4.2, 0.2, 11.5, 0.2, 11.5, 6.5, 14, 6.5, 14, 14,
  ];

  const mainSeparation = [
    -15, 6.4, -11.6, 6.4, -11.6, 0, 11.6, 0, 11.6, 6.4, 15, 6.4,
  ];

  const heightMainSeparation = 10;
  const heightWall = 5;
  const ply = 0.2;

  let corners1 = [];
  let corners21 = [];
  let corners22 = [];
  let corners3 = [];

  let walls1 = [];
  let walls21 = [];
  let walls22 = [];
  let walls3 = [];

  for (let b = 0; b < separation1.length / 2; b++) {
    corners1.push(new corner(separation1[2 * b], separation1[2 * b + 1]));
  }
  for (let b = 0; b < separation21.length / 2; b++) {
    corners21.push(new corner(separation21[2 * b], separation21[2 * b + 1]));
  }
  for (let b = 0; b < separation22.length / 2; b++) {
    corners22.push(new corner(separation22[2 * b], separation22[2 * b + 1]));
  }
  for (let b = 0; b < mainSeparation.length / 2; b++) {
    corners3.push(new corner(mainSeparation[2 * b], mainSeparation[2 * b + 1]));
  }

  for (let c = 0; c < corners1.length; c++) {
    walls1.push(new wall(corners1[c]));
  }
  for (let c = 0; c < corners21.length; c++) {
    walls21.push(new wall(corners21[c]));
  }
  for (let c = 0; c < corners22.length; c++) {
    walls22.push(new wall(corners22[c]));
  }
  for (let c = 0; c < corners3.length; c++) {
    walls3.push(new wall(corners3[c]));
  }

  const d = new door(3, 4);

  const dSpace = new doorSpace(d, 3.1);
  const dSpace2 = new doorSpace(d, 11.1);
  const dSpace3 = new doorSpace(d, 19.1);

  const doorWindow = new win(2.5, 4);
  const doorWindowSpace = new windowSpace(doorWindow, 0.5, 0.95);

  var windowHall = new win(2, 3);

  var windowSpace2O = new windowSpace(windowHall, 5, 1);
  var windowSpace21 = new windowSpace(windowHall, 9, 1);
  var windowSpace22 = new windowSpace(windowHall, 13, 1);
  var windowSpace23 = new windowSpace(windowHall, 17, 1);

  walls3[2].windowSpaces = [
    windowSpace2O,
    windowSpace21,
    windowSpace22,
    windowSpace23,
  ];

  walls3[2].doorSpaces = [dSpace, dSpace2, dSpace3];

  walls3[0].windowSpaces = [doorWindowSpace];
  walls3[4].windowSpaces = [doorWindowSpace];

  const dSpace21 = new doorSpace(d, 3);
  const dSpace11 = new doorSpace(d, 3.3);
  const dSpace22 = new doorSpace(d, 3.3);

  walls1[1].doorSpaces = [dSpace11];
  walls21[4].doorSpaces = [dSpace21];
  walls22[1].doorSpaces = [dSpace22];

  const separationWall1 = buildFromPlan(
    walls1,
    ply,
    heightWall,
    {
      interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1),
      exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1),
    },
    scene
  );

  const separationWall21 = buildFromPlan(
    walls21,
    ply,
    heightWall,
    {
      interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1),
      exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1),
    },
    scene
  );

  const separationWall22 = buildFromPlan(
    walls22,
    ply,
    heightWall,
    {
      interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1),
      exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1),
    },
    scene
  );

  const mainSeparationWall = buildFromPlan(
    walls3,
    ply,
    heightMainSeparation,
    {
      interiorUV: new BABYLON.Vector4(0.2, 0, 1, 1),
      exteriorUV: new BABYLON.Vector4(0.2, 0, 1, 1),
      interior: true,
    },
    scene
  );

  const mat = new BABYLON.StandardMaterial("", scene);
  mat.diffuseTexture = new BABYLON.Texture(
    "https://i.imgur.com/CGTCTfv.jpg",
    scene
  );

  separationWall1.material = europeanWallsMaterial(scene);
  separationWall21.material = japaneseWallsMaterial(scene);
  separationWall22.material = arabicWallsMaterial(scene);
  mainSeparationWall.material = mainHallSeperationMateraial(scene);

  separationWall1.checkCollisions = true;
  separationWall21.checkCollisions = true;
  separationWall22.checkCollisions = true;
  mainSeparationWall.checkCollisions = true;
}
