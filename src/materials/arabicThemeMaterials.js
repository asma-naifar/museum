import * as BABYLON from "babylonjs";


export function arabicFloorMaterial(scene) {
	
	const mat = new BABYLON.StandardMaterial("arabicTile", scene);
	mat.ambientTexture = new BABYLON.Texture("./assets/textures/arabic-floor.jpg", scene);
	
    mat.ambientTexture.uScale = 1.0;
	mat.ambientTexture.vScale = 1.0;

    return mat
}

export function arabicWallsMaterial(scene) {
	
	const mat = new BABYLON.StandardMaterial("arabicwalls", scene);
	mat.ambientTexture = new BABYLON.Texture("./assets/textures/arabic-walls.jpg", scene);
	
    mat.ambientTexture.uScale = 25.0;
	mat.ambientTexture.vScale = 10.0;

    return mat
}

export function arabicCeilingMaterial(scene) {
	
	const mat = new BABYLON.StandardMaterial("arabicCeiling", scene);
	mat.ambientTexture = new BABYLON.Texture("./assets/textures/arabic-walls.jpg", scene);
	
    mat.ambientTexture.uScale = 10.0;
	mat.ambientTexture.vScale = 10.0;

	
	var light1 = new BABYLON.PointLight("arabicLight", new BABYLON.Vector3(7, 0.1, 8.5), scene);
    light1.diffuse = new BABYLON.Color3(1, 1, 1);
    light1.specular = new BABYLON.Color3(0.3, 0.3, 0.3);
    light1.intensity = parseFloat(7 / 10);
    light1.falloffType = BABYLON.Light.FALLOFF_STANDARD;
    light1.range = 50;

    // const yellowMat = new BABYLON.StandardMaterial("yellowMat");
    // yellowMat.emissiveColor = BABYLON.Color3.Yellow();

    // const bulb = BABYLON.MeshBuilder.CreateSphere("bulb", {diameterX: 0.1, diameterZ: 0.1});
    
    // bulb.material = yellowMat;
    // bulb.position.x = -7.5;
	// bulb.position.z = 7.75;
    // bulb.position.y = 4;

    // lampLight.parent = bulb;

    return mat
}




