import { createDoor } from "./doors";
import * as BABYLON from "@babylonjs/core";

export function createSlindingDoors(scene, collider) {
  const door1 = createDoor("door1", scene);
  const door2 = createDoor("door2", scene);
  const door3 = createDoor("door3", scene);

  door1.position.x = -7;
  door2.position.x = 1;
  door3.position.x = 8.9;

  const frameRate = 10;

  const door1Slide = new BABYLON.Animation(
    "door1Slide",
    "position.x",
    frameRate,
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
  );

  const door2Slide = new BABYLON.Animation(
    "door2Slide",
    "position.x",
    frameRate,
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
  );

  const door3Slide = new BABYLON.Animation(
    "door3Slide",
    "position.x",
    frameRate,
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
  );

  const door1KeyFrames = [];

  door1KeyFrames.push({
    frame: 0,
    value: -7,
  });

  door1KeyFrames.push({
    frame: 0.5 *frameRate,
    value: -10.2,
  });

  door1KeyFrames.push({
    frame: frameRate,
    value: -10.2,
  });

  door1KeyFrames.push({
    frame: 2 * frameRate,
    value: -7,
  });


  door1Slide.setKeys(door1KeyFrames);
  door1.animations.push(door1Slide);


  const door2KeyFrames = [];

  door2KeyFrames.push({
    frame: 0,
    value: 1,
  });

  door2KeyFrames.push({
    frame: 0.5*frameRate,
    value: -2.2,
  });

  door2KeyFrames.push({
    frame: frameRate,
    value: -2.2,
  });

  door2KeyFrames.push({
    frame: 2 * frameRate,
    value: 1,
  });


  door2Slide.setKeys(door2KeyFrames);
  door2.animations.push(door2Slide);


  const door3KeyFrames = [];

  door3KeyFrames.push({
    frame: 0,
    value: 8.9,
  });

  door3KeyFrames.push({
    frame: frameRate,
    value: 5.7,
  });

  door3KeyFrames.push({
    frame: 1.5 * frameRate,
    value: 5.7,
  });

  door3KeyFrames.push({
    frame: 2 * frameRate,
    value: 8.9,
  });


  door3Slide.setKeys(door3KeyFrames);
  door3.animations.push(door3Slide);



  let actionDoor1 = new BABYLON.ExecuteCodeAction(
    {
      trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
      parameter: {
        mesh: door1,
      },
    },
    (evt) => {
      const anim1 = scene.beginAnimation(door1, -7, 2 * frameRate, false);
    }
  );


  let actionDoor2 = new BABYLON.ExecuteCodeAction(
    {
      trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
      parameter: {
        mesh: door2,
      },
    },
    (evt) => {
      const anim2 = scene.beginAnimation(door2, 1, 2 * frameRate, false);
    }
  );

  let actionDoor3 = new BABYLON.ExecuteCodeAction(
    {
      trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
      parameter: {
        mesh: door3,
      },
    },
    (evt) => {
      const anim3 = scene.beginAnimation(door3, 5.7, 2 * frameRate, false);
    }
  );

  collider.actionManager.registerAction(actionDoor1);
  collider.actionManager.registerAction(actionDoor2);
  collider.actionManager.registerAction(actionDoor3);
}
