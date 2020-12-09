import { ArtifactType, EnemyType } from './interfaces.ts';
import { EnemyFactory, KnightFactory, MageFactory, UndeadFactory } from './Factory.ts';


// const factory = new Factory();

// const DeckardCain = factory.createGameArtifact("Deckard Cain", ArtifactType.NPC);
// const bomb = factory.createGameArtifact("Nuclear!!", ArtifactType.Bomb);
// const Diablo = factory.createGameArtifact("Diablo", ArtifactType.Enemy);

// DeckardCain.move();
// DeckardCain.act();

// bomb.move();
// bomb.act();

// Diablo.move();
// Diablo.act();

// const enemyFactory = new EnemyFactory();

// const knight = enemyFactory.createGameElement("Knight of Ni!", EnemyType.Knight);
// const Merlin = enemyFactory.createGameElement("Merlin", EnemyType.Mage);
// const Arthas = enemyFactory.createGameElement("Arthas", EnemyType.Undead);

const knightsFactory = new KnightFactory();
const magesFactory = new MageFactory();
const undeadFactory = new UndeadFactory();

const knight = knightsFactory.createGameElement("Knight of Ni!");
const Merlin = magesFactory.createGameElement("Merlin");
const Arthas = undeadFactory.createGameElement("Arthas"); 

knight.move();
knight.act();

Merlin.move();
Merlin.act();

Arthas.move();
Arthas.act();


console.log("The end....");
