import * as BABYLON from "babylonjs";

export function mainHallFloorMaterial(scene) {
	const mat = new BABYLON.StandardMaterial("mainHall", scene);
	mat.ambientTexture = new BABYLON.Texture("./assets/textures/checkeredFloor.jpg", scene);
	
    mat.ambientTexture.uScale = 20.0;
	mat.ambientTexture.vScale = 10.0;

    return mat
}

export function mainHallSeperationMateraial(scene) {
	const mat = new BABYLON.StandardMaterial("mainHall", scene);
	mat.ambientTexture = new BABYLON.Texture("./assets/textures/japanese-ceiling.jpg", scene);
	
    mat.ambientTexture.uScale = 20.0;
	mat.ambientTexture.vScale = 10.0;

    return mat
}


export function fountainMaterial(scene) {
	const mat = new BABYLON.StandardMaterial("fountainMaterial", scene);
	mat.ambientTexture = new BABYLON.Texture("./assets/textures/stone.jpg", scene);
	mat.specularColor = new BABYLON.Color3(0.2, 0.2, 0.2)
    mat.ambientTexture.uScale = 10.0;
	mat.ambientTexture.vScale = 10.0;

    return mat
}