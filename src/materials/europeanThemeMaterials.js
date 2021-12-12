import * as BABYLON from "babylonjs";


export function europeanFloorMaterial(scene) {
	
	const mat = new BABYLON.StandardMaterial("europeanTile", scene);
	mat.ambientTexture = new BABYLON.Texture("./assets/textures/european-floor.jpg", scene);
	
    mat.ambientTexture.uScale = 20.0;
	mat.ambientTexture.vScale = 20.0;

    return mat
}

export function europeanWallsMaterial(scene) {
	
	const mat = new BABYLON.StandardMaterial("europeanwalls", scene);
	mat.ambientTexture = new BABYLON.Texture("./assets/textures/european-walls.jpg", scene);
	
    mat.ambientTexture.uScale = 1.0;
	mat.ambientTexture.vScale = 1.0;

    return mat
}

export function europeanCeilingMaterial(scene) {
	
	const mat = new BABYLON.StandardMaterial("europeanCeiling", scene);
	mat.ambientTexture = new BABYLON.Texture("./assets/textures/european-walls.jpg", scene);
	
    mat.ambientTexture.uScale = 1.0;
	mat.ambientTexture.vScale = 1.0;

	// const lampLight = new BABYLON.SpotLight("lampLight", BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, -1, 0), Math.PI, 0.1, scene);
    // lampLight.diffuse = BABYLON.Color3.Yellow();

	
	var light1 = new BABYLON.PointLight("europeanLight", new BABYLON.Vector3(0,0.2, 7.75), scene);
    light1.diffuse = new BABYLON.Color3(1, 1, 1);
    light1.specular = new BABYLON.Color3(0.3, 0.3, 0.3);
    light1.intensity = parseFloat(7 / 10);
    light1.falloffType = BABYLON.Light.FALLOFF_STANDARD;
    light1.range = 24;

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




