import { createPoster } from "./genericFunctions";

export function createArabicPosters(scene) {
  const poster1 = createPoster(
    "poster-1",
    "./assets/tableaux/egypt.jpg" ,
    {
      width: 2.2,
      height: 2.2
    },
    {
    positionX: 9,
    positionY: 1.25,
    positionZ: 13.99,
    },
    "./assets/descriptions/egypt-text.jpg",
    scene
  );
  const poster2 = createPoster(
    "poster-2",
    "./assets/tableaux/rukh.jpg",
    {
      width: 2,
      height: 2
    },
    {
      positionX: 13.99,
      positionY: 1.25,
      positionZ: 10,
    },
    "./assets/descriptions/rukh-text.jpg",
    scene
  );
  const poster3 = createPoster(
    "poster-3",
    "./assets/tableaux/egypt2.jpg" ,
    {
      width: 4,
      height: 2
    },
    {
      positionX: 4.21,
      positionY: 1.25,
      positionZ: 6.3,
    },
    "./assets/descriptions/egypt2-text.jpg",
    scene
  );
  poster2.rotation.y = Math.PI/2;
  poster3.rotation.y = -Math.PI/2;
}

export function createArabicCentralPiece() {


}
