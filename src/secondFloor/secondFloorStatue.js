import * as BABYLON from "babylonjs";


export function createSecondFloorArt(scene) {

    var material_sphere = new BABYLON.StandardMaterial('spheremat', scene);
    material_sphere.diffuseTexture = new BABYLON.Texture("./assets/textures/gold.jpg", scene);
    material_sphere.diffuseTexture.hasAlpha = true;


    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
	sphere.material = material_sphere;

    var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
    particleSystem.parent = sphere

    particleSystem.particleTexture = new BABYLON.Texture("./assets/textures/secondFloor-floor.jpg", scene);
    particleSystem.emitter = sphere
    particleSystem.minEmitBox = new BABYLON.Vector3.Zero();
    particleSystem.maxEmitBox = new BABYLON.Vector3.Zero();
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.1;
    particleSystem.minLifeTime = 0.7;
    particleSystem.maxLifeTime = 0.9;
    particleSystem.emitRate = 1500;
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.gravity =    new BABYLON.Vector3(0, -9.81, 0);
    particleSystem.direction1 = new BABYLON.Vector3(-1, 1, -1);
    particleSystem.direction2 = new BABYLON.Vector3( 1, 1,  1);
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;
    particleSystem.minEmitPower = 3;
    particleSystem.maxEmitPower = 4;
    particleSystem.updateSpeed = 0.005;
    particleSystem.start();
	

    sphere.position.y = 6.5
    sphere.position.z = 6.5
}
