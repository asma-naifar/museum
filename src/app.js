import * as BABYLON from "babylonjs";
import * as OIMO from "oimo";

import { createCamera } from "./camera/camera.js";
import { createGound } from "./structure/ground.js";
import { createBuilding } from "./structure/building.js";
import { createInteriorSeparation } from "./structure/interiorSeparation.js";
import { createStairs } from "./structure/stairs.js";
import { createSecondFloor } from "./structure/secondFloor.js";
import { createFloors } from "./structure/floor.js";
import { createCeiling } from "./structure/ceiling.js";

import { createJapanesePosters } from "./posters/japanesePosters";
import { createVermeerPosters } from "./posters/vermeerPoster";
import { createArabicPosters } from "./posters/arabicPosters";

import { createFountain } from "./structure/fountain.js";
import { createStatue } from "./structure/statue";

import { createSlindingDoors } from "./doors/slidingDoors";

import { marbleMaterial } from "./materials/stairsMaterial.js";
import {createSecondFloorArt} from "./secondFloor/secondFloorStatue"


let canvas, engine;
let scene, camera;

function createLights() {
  let light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 10, 0),
    scene
  );
}

let isLocked = false;

function set_FPS_mode(scene, canvas, camera) {
  // On click event, request pointer lock
  scene.onPointerDown = function (evt) {
    //true/false check if we're locked, faster than checking pointerlock on each single click.
    if (!isLocked) {
      canvas.requestPointerLock =
        canvas.requestPointerLock ||
        canvas.msRequestPointerLock ||
        canvas.mozRequestPointerLock ||
        canvas.webkitRequestPointerLock ||
        false;
      if (canvas.requestPointerLock) {
        canvas.requestPointerLock();
      }
    }

    //continue with shooting requests or whatever :P
    //evt === 0 (left mouse click)
    //evt === 1 (mouse wheel click (not scrolling))
    //evt === 2 (right mouse click)
  };

  // Event listener when the pointerlock is updated (or removed by pressing ESC for example).
  let pointerlockchange = function () {
    let controlEnabled =
      document.pointerLockElement ||
      document.mozPointerLockElement ||
      document.webkitPointerLockElement ||
      document.msPointerLockElement ||
      false;

    // If the user is already locked
    if (!controlEnabled) {
      camera.detachControl(canvas);
      isLocked = false;
    } else {
      camera.attachControl(canvas);
      setTimeout(() => {
        isLocked = true;
      }, 100);
    }
  };

  // Attach events to the document
  document.addEventListener("pointerlockchange", pointerlockchange, false);
  document.addEventListener("mspointerlockchange", pointerlockchange, false);
  document.addEventListener("mozpointerlockchange", pointerlockchange, false);
  document.addEventListener(
    "webkitpointerlockchange",
    pointerlockchange,
    false
  );
}

function setSkybox(scene) {
  var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
  var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
    "./assets/skybox/skybox",
    scene
  );
  skyboxMaterial.reflectionTexture.coordinatesMode =
    BABYLON.Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  skybox.material = skyboxMaterial;
}

export function init() {
  canvas = document.getElementById("renderCanvas");
  engine = new BABYLON.Engine(canvas, true);
  scene = new BABYLON.Scene(engine);

  var scene = new BABYLON.Scene(engine);
  var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
  var physicsPlugin = new BABYLON.OimoJSPlugin(true, {}, OIMO);
  scene.enablePhysics(gravityVector, physicsPlugin);

  scene.collisionsEnabled = true;

  camera = createCamera(scene, canvas);
  var cameraCollider = BABYLON.Mesh.CreateBox("cameraCube", 1.9, scene);
  cameraCollider.parent = camera;
  cameraCollider.actionManager = new BABYLON.ActionManager(scene);

  set_FPS_mode(scene, canvas, camera);

  createLights();

  createInteriorSeparation(scene);
  createGound("floor", 300, 300, "./assets/textures/grass.png", scene);
  createBuilding(scene);
  setSkybox(scene);
  createSecondFloor(scene);
  createFloors(scene);
  createCeiling(scene);
  createJapanesePosters(scene);
  createArabicPosters(scene);
  createVermeerPosters(scene);
  const fountain = createFountain(scene);

  const music = new BABYLON.Sound(
    "backgroundMusic",
    "./assets/audio/backgroundMusic.mp3",
    scene,
    function () {
      music.play();
    },
    { loop: true, autoplay: true, volume: 0.2 }
  );
  music.attachToMesh(fountain);

  let leftStairs = createStairs(3.25, 5, 6.67, scene);
  let rightStairs = createStairs(3.3, 5, 6.67, scene);

  leftStairs.position.x = -11.7;
  leftStairs.position.z = 6.3;
  leftStairs.position.y = 0;

  rightStairs.position.x = 15;
  rightStairs.position.z = 6.3;
  rightStairs.position.y = 0;

  leftStairs.checkCollisions = true;
  rightStairs.checkCollisions = true;

  const stairsMat = marbleMaterial(5, 5, scene);

  leftStairs.material = stairsMat;
  rightStairs.material = stairsMat;

  createStatue("statue1", -10, scene);
  createStatue("statue2", 10, scene);

  createSlindingDoors(scene, cameraCollider);
  createSecondFloorArt(scene)

  window.addEventListener("resize", function () {
    engine.resize();
  });

  engine.runRenderLoop(function () {
    scene.render();
  });
}
