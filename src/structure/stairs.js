import * as BABYLON from "@babylonjs/core";
import earcut from "earcut";

export function createStairs(width, height, depth, scene) {
  let stepHeight = 0.6;

  let numSteps = depth * 2 * stepHeight;
  let stepDepth = height / numSteps;

  let v = [];
  let p = new BABYLON.Vector2(height, depth / (numSteps * stepHeight));
  v.push(new BABYLON.Vector2(p.x, p.y));
  for (let i = 0; i < numSteps; i++) {
    p = p.add(new BABYLON.Vector2(0, stepHeight));
    v.push(new BABYLON.Vector2(p.x, p.y));
    p = p.add(new BABYLON.Vector2(-stepDepth, 0));
    v.push(new BABYLON.Vector2(p.x, p.y));
  }
  v.push(new BABYLON.Vector2(0, 0));
  v.push(new BABYLON.Vector2(height, 0));
  const sb = new BABYLON.PolygonMeshBuilder("stairs", v, scene, earcut);
  let stairs = sb.build(false, width);
  stairs.position = new BABYLON.Vector3(width / 2, 0, 0);
  var deg = 1.5708;
  stairs.rotation = new BABYLON.Vector3(0, deg * 2, deg);
  return stairs;
}

function creerCloison(nom,opts,scn){
	
	let options   = opts || {} ; 
	let hauteur   = options.hauteur || 3.0 ; 
	let largeur   = options.largeur || 5.0 ; 
	let epaisseur = options.epaisseur || 0.1 ;

	let materiau   = options.materiau || new BABYLON.StandardMaterial("materiau-pos"+nom,scn); 

    let groupe = new BABYLON.TransformNode("groupe-"+nom) ; 

	let cloison = BABYLON.MeshBuilder.CreateBox(nom,{width:largeur,height:hauteur,depth:epaisseur},scn) ;
	cloison.material = materiau ; 
	cloison.parent = groupe ; 
	cloison.position.y = hauteur / 2.0 ; 



    return groupe ;  
}
