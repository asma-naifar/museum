import * as BABYLON from "babylonjs";

export function secondFloorMaterial(scene) {

	const mat = new BABYLON.StandardMaterial("secondFloorFloor", scene);
	mat.ambientTexture = new BABYLON.Texture("./assets/textures/secondFloor-floor.jpg", scene);
	
    mat.ambientTexture.uScale = 20.0;
	mat.ambientTexture.vScale = 10.0;

    return mat
}

export function secondFloorCeilingMaterial(scene) {

	const mat = new BABYLON.StandardMaterial("secondFloorCeiling", scene);
	mat.ambientTexture = new BABYLON.Texture("./assets/textures/japanese-ceiling.jpg", scene);
	
    mat.ambientTexture.uScale = 20.0;
	mat.ambientTexture.vScale = 10.0;

	var light1 = new BABYLON.PointLight("secondFloorlight", new BABYLON.Vector3(0, 5.2, 8.5), scene);
    light1.diffuse = new BABYLON.Color3(1, 1, 1);
    light1.specular = new BABYLON.Color3(0.3, 0.3, 0.3);
    light1.intensity = parseFloat(7 / 10);
    light1.falloffType = BABYLON.Light.FALLOFF_STANDARD;
    light1.range = 24;

    return mat
}