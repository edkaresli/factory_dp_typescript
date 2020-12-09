import { IGameArtifact, EnemyType } from './interfaces.ts';

export class BaseGameArtifact implements IGameArtifact {    
    constructor(public name: string) {
       console.log(`${this.name} created...`);
    }

    move() {
        console.log("BaseGameArtifact.move()");
    }

    act() {
        console.log("BaseGameArtifact.act()");
    }
}

export class Bomb extends BaseGameArtifact {
    constructor(public name: string) {
        super(name);
        console.log(`Bomb.${this.name} created`);
    }

    move() {
        console.log("Bomb's don't move()");
    }

    act() {
        console.log("BOOOOOMMM!");
    }
}

export class NPC extends BaseGameArtifact {
    constructor(public name: string) {
        super(name);
        console.log(`NPC.${this.name} created`);
    }

    move() {
        console.log(`${this.name} is walking slowly`);
    }

    act() {
        console.log(`${this.name}: Stay a while and listen...`); 
    }
}

export class Enemy extends BaseGameArtifact {
    constructor(public name: string) {
        super(name);
        console.log(`Enemy.${this.name} created: Who disturbed me?`);
    }

    move() {
        console.log(`${this.name} is charging forward!`);
    }

    act() {
        console.log(`${this.name} has attacked you, you lost 10 HP!`);
    }
}

export class Knight extends Enemy {
    constructor(public name: string) {
        super(name);
        console.log(`Knight.${this.name} created: I'm evil but glorious!`);
    }

    move() {
        console.log(`${this.name} is riding his horse!`);
    }

    act() {
        console.log(`${this.name} has attacked you, you lost 5 HP!`);
    }
}

export class Mage extends Enemy {
    constructor(public name: string) {
        super(name);
        console.log(`Mage.${this.name} created: I conjure and cast spells!`);
    }

    move() {
        console.log(`${this.name} is teleporting!`);
    }

    act() {
        console.log(`${this.name} has turned you into a sheep!`);
    }
}

export class Undead extends Enemy {
    constructor(public name: string) {
        super(name);
        console.log(`Undead.${this.name} created: My farts will kill you!`);
    }

    move() {
        console.log(`${this.name} is walking towards you!`);
    }

    act() {
        console.log(`${this.name} has attacked you with cyanid farts, you've lost 50 HP!`);
    }
}
