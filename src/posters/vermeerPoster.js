import { createPoster } from "./genericFunctions";

export function createVermeerPosters(scene) {
  const poster1 = createPoster(
    "poster-1",
    "./assets/tableaux/woman.jpg" ,
    {
      width: 2,
      height: 2
    },
    {
    positionX: 0,
    positionY: 1.25,
    positionZ: 13.99,
    },
    "./assets/descriptions/woman-text.jpg",
    scene
  );
  const poster2 = createPoster(
    "poster-2",
    "./assets/tableaux/perl.jpg",
    {
      width: 2.2,
      height: 2
    },
    {
      positionX: 3.79,
      positionY: 1.25,
      positionZ: 6.3,
    },
    "./assets/descriptions/perl-text.jpg",
    scene
  );
  const poster3 = createPoster(
    "poster-3",
    "./assets/tableaux/street.jpg" ,
    {
      width: 2,
      height: 2
    },
    {
      positionX: -3.79,
      positionY: 1.25,
      positionZ: 10,
    },
    "./assets/descriptions/street-text.jpg",
    scene
  );
  poster2.rotation.y = Math.PI/2;
  poster3.rotation.y = -Math.PI/2;
}

export function createVermeerCentralPiece() {


}
