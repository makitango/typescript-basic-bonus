import {characters} from "./resources/characters.ts";

// Schreibe eine Funktion die eine Liste mit Rick&Morty Charakteren entgegen nimmt und eine Liste mit nur den lebenden Menschen zurück gibt.
const aliveCharacters = characters.filter((character) => character.status === "Alive" && character.species === "Human");
console.log(aliveCharacters)

// Schreibe eine weitere Funktion die eine Liste mit Rick&Morty Charakteren entgegen nimmt und eine Liste (aus Strings) mit den Namen der Charaktere zurück gibt.
const characterNames:string[] = characters.map((character) => character.name);
console.log(characterNames)

// Schreibe eine weitere Funktion die eine Liste mit Rick&Morty Charakteren entgegen nimmt und eine Liste mit speziellen Objekten zurück gibt. Die Objekte sollen folgend aufgebaut sein:
// {
//    "name": "some-name",
//    "origin": "name-of-origin",
// }
const characterOrigin = characters.map((character):{name:string, origin:string} => {
        return {
            name: character.name,
            origin: character.origin.name
        }
    }
);
console.log(characterOrigin)