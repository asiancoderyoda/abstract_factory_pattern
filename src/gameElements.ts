import { IGameArtifects } from "./interface";

export class BaseGameArtifects implements IGameArtifects {
  /*
        shorttcut for the same:
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    */
  constructor(public name: string) {
    console.log(`${this.name} game element is created`);
  }
  move(): void {
    console.log(`${this.name} moves`);
  }
  attack(): void {
    console.log(`${this.name} attacks`);
  }
}

export class Bomb extends BaseGameArtifects {
  constructor(name: string) {
    super(name);
  }
  move(): void {
    console.log(`${this.name} dont move`);
  }
  attack(): void {
    console.log(`${this.name} explode`);
  }
}

export class NPC extends BaseGameArtifects {
  constructor(name: string) {
    super(name);
  }
  move(): void {
    console.log(`${this.name} moves`);
  }
  attack(): void {
    console.log(`${this.name} dont attack`);
  }
}

export class Enemy extends BaseGameArtifects {
  constructor(name: string) {
    super(name);
  }
  move(): void {
    console.log(`${this.name} hides in the shadows`);
  }
  attack(): void {
    console.log(`${this.name} attacks`);
  }
}
