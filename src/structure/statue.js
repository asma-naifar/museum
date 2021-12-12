import * as BABYLON from "@babylonjs/core";

export function createStatue(name,positionX, scene) {
  var group = new BABYLON.TransformNode("group-statue"+name, scene);
  const boxStatue = new BABYLON.MeshBuilder.CreateBox(
    "box-statue"+name,
    { height: 0.1, width: 4, depth: 4 },
    scene
  );
  
  
  boxStatue.position.y = 0.1;
  boxStatue.position.x = positionX;
  boxStatue.position.z = -10;

  const boxStatueMat = new BABYLON.StandardMaterial("boxStatue"+name, scene);
  boxStatueMat.diffuseTexture = new BABYLON.Texture("./assets/textures/gold.jpg", scene);
  boxStatueMat.diffuseTexture.hasAlpha = true;
  boxStatueMat.backFaceCulling = false;
  boxStatue.material = boxStatueMat 
  boxStatue.receiveShadows = true

  const sphereStatue = new BABYLON.MeshBuilder.CreateSphere(
    "sphere-statue"+name,
    { diameter: 0.25 },
    scene
  );
  sphereStatue.position = new BABYLON.Vector3(2, 0, 2);
  sphereStatue.parent = group;

  //draw lines to form a triangle
  const points = [];
  points.push(new BABYLON.Vector3(2, 0, 2));
  points.push(new BABYLON.Vector3(2, 0, -2));
  points.push(new BABYLON.Vector3(-2, 0, -2));
  points.push(points[0]); //close the triangle;
  const triangleStatue = BABYLON.MeshBuilder.CreateLines(
    "triangleStatue"+name,
    { points: points },
    scene
  );
  triangleStatue.parent = group;

  const slide = function (turn, dist) {
    //after covering dist apply turn
    this.turn = turn;
    this.dist = dist;
  };

  const track = [];
  track.push(new slide(Math.PI / 2, 4));
  track.push(new slide((3 * Math.PI) / 4, 8));
  track.push(new slide((3 * Math.PI) / 4, 8 + 4 * Math.sqrt(2)));

  let distance = 0;
  let step = 0.05;
  let p = 0;

  // Particles
  var particleSystem = new BABYLON.GPUParticleSystem(
    "particlesStatue"+name,
    4000,
    scene
  );
  particleSystem.particleTexture = new BABYLON.Texture(
    "./assets/textures/gold.jpg",
    scene
  );

  particleSystem.minSize = 0.01;
  particleSystem.maxSize = 0.1;
  particleSystem.minLifeTime = 0.5;
  particleSystem.maxLifeTime = 5.0;
  particleSystem.minEmitPower = 0.5;
  particleSystem.maxEmitPower = 3.0;
  particleSystem.emitter = sphereStatue;
  particleSystem.emitRate = 100;
  particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
  particleSystem.direction1 = new BABYLON.Vector3(-0.2, 0.2, -0.2);
  particleSystem.direction2 = new BABYLON.Vector3(0.2, 0.2, 0.2);
  particleSystem.color1 = new BABYLON.Color4(1, 1, 0, 1);
  particleSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1);
  particleSystem.gravity = new BABYLON.Vector3(0, -9.0, 0);

  particleSystem.start();

  group.position.y = 2.3;
  group.position.x = positionX;
  group.position.z = -8;
  group.rotation.z = Math.PI / 2;

  scene.onBeforeRenderObservable.add(() => {
    sphereStatue.movePOV(0, 0, step);
    distance += step;

    if (distance > track[p].dist) {
      sphereStatue.rotate(BABYLON.Axis.Y, track[p].turn, BABYLON.Space.LOCAL);
      p += 1;
      p %= track.length;
      if (p === 0) {
        distance = 0;
        sphereStatue.position = new BABYLON.Vector3(2, 0, 2); //reset to initial conditions
        sphereStatue.rotation = BABYLON.Vector3.Zero(); //prevents error accumulation
      }
    }
  });
}
