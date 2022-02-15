import { GameArtifectTypes } from "./enums";
import { GameElementFactory } from "./GameElementFactory";

let gameElementFactory = new GameElementFactory();

/*
    * Create a new game element using Factory Method pattern

    const DeckardCain = gameElementFactory.createArtifect("Deckard Cain", GameArtifectTypes.NPC);
    const bomb = gameElementFactory.createArtifect("Nuclear!!", GameArtifectTypes.Bomb);
    const Diablo = gameElementFactory.createArtifect("Diablo", GameArtifectTypes.Enemy);

    DeckardCain.move();
    DeckardCain.attack();

    bomb.move();
    bomb.attack();

    Diablo.move();
    Diablo.attack();

*/