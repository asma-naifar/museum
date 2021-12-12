import * as BABYLON from "babylonjs";
import {woodMaterial, glassMaterial} from "../materials/genericMaterial.js"



export function createPoster(name, tableau, ratio, position, description, scene) {

  var width = ratio["width"]
  var height = ratio["height"]

  var positionX = position["positionX"]
  var positionY = position["positionY"]
  var positionZ = position["positionZ"]
  
  var poster = new BABYLON.Texture(tableau, scene);
  
  var group = new BABYLON.TransformNode("group-" + name);

  group.position.x = positionX;
  group.position.y = positionY;
  group.position.z = positionZ;
  
  var tableau1 = BABYLON.MeshBuilder.CreatePlane(
    "tableau-" + name,
    { width: width, height: height},
    scene
  );

  tableau1.parent = group;
  tableau1.position.y = height*(2/3);
  
  var mat = new BABYLON.StandardMaterial("tex-tableau-" + name, scene);
  tableau1.material = mat;
  mat.diffuseTexture = poster;

  var path = [
    new BABYLON.Vector3(-width/2, -height/2, 0),
    new BABYLON.Vector3(width/2, -height/2, 0),
    new BABYLON.Vector3(width/2, height/2, 0),
    new BABYLON.Vector3(-width/2, height/2, 0),
  ];

  var profilePoints = [
    new BABYLON.Vector3(-height*0.1/2, height*0.1/2, 0),
    new BABYLON.Vector3(-height*0.1/2, -height*0.1/2, 0),
    new BABYLON.Vector3(height*0.1/2, -height*0.1/2, 0),
    new BABYLON.Vector3(height*0.1/2, width*0.1/2, 0),
    new BABYLON.Vector3(width*0.1/2, width*0.1/2, 0),
    new BABYLON.Vector3(width*0.1/2, height*0.1/2, 0),
  ];

  var frame = frameMaker("line", { path: path, profile: profilePoints }, scene);
  frame.parent = group;
  frame.position.y = height*(2/3);
  frame.material = woodMaterial(scene)


  var tableauTextBox = BABYLON.MeshBuilder.CreateBox(
    "tableau-text-" + name,
    { width: 1.6, height: 0.5, depth: 0.2},
    scene
  );

  var tableauText = BABYLON.MeshBuilder.CreatePlane(
    "tableau-text-" + name,
    { width: 1.6, height: 0.5},
    scene
  );


  tableauText.parent = group;
  tableauTextBox.parent = group
  tableauText.position.z = -0.11

  var matText = new BABYLON.StandardMaterial("tex-tableau-text" + name, scene);
  tableauText.material = matText;
  matText.diffuseTexture = new BABYLON.Texture(description, scene);

  var matTextBox = new BABYLON.StandardMaterial("tex-tableau-text-box" + name, scene);
  tableauTextBox.material = matTextBox
  matTextBox.ambientTexture = new BABYLON.Texture("./assets/descriptions/marble.jpg", scene);
  matTextBox.ambientTexture.uScale = 1.0;
	matTextBox.ambientTexture.vScale = 5.0;
  

  return group;

}

export function createCentralPiece(
  name,
  positionX,
  positionY,
  positionZ,
  centralPiece,
  scene
) {
  centralPiece.position.y = 1;

  var ground = BABYLON.MeshBuilder.CreateBox(
    "box" + name,
    (width = 6),
    (height = 6),
    (depth = 10),
    scene
  );

  let sphereMin = centralPiece.getBoundingInfo().boundingBox.minimum;
  let sphereMax = centralPiece.getBoundingInfo().boundingBox.maximum;

  let groundMin = ground.getBoundingInfo().boundingBox.minimum;
  let groundMax = ground.getBoundingInfo().boundingBox.maximum;

  let newMin = BABYLON.Vector3.Minimize(sphereMin, groundMin);
  let newMax = BABYLON.Vector3.Maximize(sphereMax, groundMax);

  centralPiece.setBoundingInfo(new BABYLON.BoundingInfo(newMin, newMax));

  centralPiece.showBoundingBox = true;
  centralPiece.position.x = positionX;
  centralPiece.position.y = positionY;
  centralPiece.position.z = positionZ;

  return centralPiece;
}

function frameMaker(name, options, scene) {
  var path = options.path;
  var profile = options.profile;

  var originX = Number.MAX_VALUE;

  for (var m = 0; m < profile.length; m++) {
    originX = Math.min(originX, profile[m].x);
  }

  var innerData = [];
  var outerData = [];
  var angle = 0;
  var extrusion = 0;
  var width = 0;
  var cornerProfile = [];

  var nbPoints = path.length;
  var line = BABYLON.Vector3.Zero();
  var nextLine = BABYLON.Vector3.Zero();
  path[1].subtractToRef(path[0], line);
  path[2].subtractToRef(path[1], nextLine);

  for (var p = 0; p < nbPoints; p++) {
    angle =
      Math.PI -
      Math.acos(
        BABYLON.Vector3.Dot(line, nextLine) /
          (line.length() * nextLine.length())
      );
    var direction = BABYLON.Vector3.Cross(line, nextLine).normalize().z;
    var lineNormal = new BABYLON.Vector3(line.y, -1 * line.x, 0).normalize();
    line.normalize();
    var extrusionLength = line.length();
    cornerProfile[(p + 1) % nbPoints] = [];
    //local profile
    for (m = 0; m < profile.length; m++) {
      width = profile[m].x - originX;
      cornerProfile[(p + 1) % nbPoints].push(
        path[(p + 1) % nbPoints]
          .subtract(lineNormal.scale(width))
          .subtract(line.scale((direction * width) / Math.tan(angle / 2)))
      );
    }

    line = nextLine.clone();
    path[(p + 3) % nbPoints].subtractToRef(path[(p + 2) % nbPoints], nextLine);
  }

  var frame = [];
  var extrusionPaths = [];

  for (var p = 0; p < nbPoints; p++) {
    extrusionPaths = [];
    for (var m = 0; m < profile.length; m++) {
      extrusionPaths[m] = [];
      extrusionPaths[m].push(
        new BABYLON.Vector3(
          cornerProfile[p][m].x,
          cornerProfile[p][m].y,
          profile[m].y
        )
      );
      extrusionPaths[m].push(
        new BABYLON.Vector3(
          cornerProfile[(p + 1) % nbPoints][m].x,
          cornerProfile[(p + 1) % nbPoints][m].y,
          profile[m].y
        )
      );
    }

    frame[p] = BABYLON.MeshBuilder.CreateRibbon(
      "frameLeft",
      {
        pathArray: extrusionPaths,
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
        updatable: true,
        closeArray: true,
      },
      scene
    );
  }

  return BABYLON.Mesh.MergeMeshes(frame, true).convertToFlatShadedMesh();
}
