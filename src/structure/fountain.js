import * as BABYLON from "babylonjs"
import {fountainMaterial} from "../materials/mainHallMaterials.js"

export function createFountain(scene) {

	const fountainProfile = [
		new BABYLON.Vector3(0, 0, 0),
		new BABYLON.Vector3(2, 0, 0),
        new BABYLON.Vector3(2, 0.8, 0),
		new BABYLON.Vector3(1.6, 0.8, 0),
        new BABYLON.Vector3(1.6, 0.2, 0),
        new BABYLON.Vector3(0.2, 0.4, 0),
		new BABYLON.Vector3(0.2, 3, 0),
		new BABYLON.Vector3(0.6, 3, 0)
	];
	
	//Create lathe
	const fountain = BABYLON.MeshBuilder.CreateLathe("fountain", {shape: fountainProfile, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
    fountain.position.z = -7.5
    fountain.checkCollisions = true
    fountain.material = fountainMaterial(scene)
    fountain.receiveShadows = true
    // Create a particle system
    var particleSystem = new BABYLON.ParticleSystem("particles", 5000, scene);

    particleSystem.parent  = fountain
    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("./assets/textures/water.jpg", scene);

    // Where the particles come from
    particleSystem.emitter = new BABYLON.Vector3(0, 3, -7.5); // the starting object, the emitter
    particleSystem.minEmitBox = new BABYLON.Vector3(-0.3, 0, 0); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(0.3, 0, 0); // To...

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.01;
    particleSystem.maxSize = 0.05;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 2;
    particleSystem.maxLifeTime = 3.5;

    // Emission rate
    particleSystem.emitRate = 1500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new BABYLON.Vector3(-0.4, 1.5, 0.4);
    particleSystem.direction2 = new BABYLON.Vector3(0.4, 1.5, -0.4);

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 3;
    particleSystem.updateSpeed = 0.025;

    // Start the particle system
    particleSystem.start();


	return fountain;
}