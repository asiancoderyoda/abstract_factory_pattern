import { GameArtifectTypes } from "./enums";
import { BaseGameArtifects, Bomb, Enemy, NPC } from "./gameElements";

export class GameElementFactory {
  public createArtifect(
    name: string,
    type: GameArtifectTypes
  ): BaseGameArtifects {
    switch (type) {
      case GameArtifectTypes.Bomb:
        return new Bomb(name);
      case GameArtifectTypes.NPC:
        return new NPC(name);
      case GameArtifectTypes.Enemy:
        return new Enemy(name);
      default:
        throw new Error("Unknown element type: " + type);
    }
  }
}
