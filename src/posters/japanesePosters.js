import { createPoster, createAudio } from "./genericFunctions";

export function createJapanesePosters(scene) {
  const poster1 = createPoster(
    "poster-1",
    "./assets/tableaux/tiger.jpg" ,
    {
      width: 3.8,
      height: 2.3
    },
    {
    positionX: -8,
    positionY: 1.25,
    positionZ: 13.99,
    },
    "./assets/descriptions/tiger-text.jpg",
    scene
  );

  
  createAudio(
    "tiger",
    -8,
    13.99,
   0,
    "./assets/audio/tiger-name.mp3",
    "./assets/audio/tiger.mp3",
    scene
  );

  const poster2 = createPoster(
    "poster-2",
    "./assets/tableaux/wave.jpg",
    {
      width: 2.5,
      height: 2
    },
    {
      positionX: -4.21,
      positionY: 1.25,
      positionZ: 6.3,
    },
    "./assets/descriptions/wave-text.jpg",
    scene
  );

  
  createAudio(
    "wave",
    -4.21,
    6.3,
    Math.PI / 2,
    "./assets/audio/wave.mp3",
    "./assets/audio/wave-description.mp3",
    scene
  );

  const poster3 = createPoster(
    "poster-3",
    "./assets/tableaux/fuji.jpg" ,
    {
      width: 2.5,
      height: 2
    },
    {
      positionX: -13.99,
      positionY: 1.25,
      positionZ: 10,
    },
    "./assets/descriptions/fuji-text.jpg",
    scene
  );

  createAudio(
    "fuji",
    -13.99,
    10,
    -Math.PI / 2,
    "./assets/audio/lake.mp3",
    "./assets/audio/lake-description.mp3",
    scene
  );

  poster2.rotation.y = Math.PI/2;
  poster3.rotation.y = -Math.PI/2;
}

export function createJapaneseCentralPiece() {


}
