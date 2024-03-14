class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    console.log(this.signature);
    return this.signature;
  }
}

class Person extends Key {
  private key: Key;
  constructor(key: Key) {
    super();
    this.key = key;
  }
  getKey(): Key {
    console.log(this.key);
    return this.key;
  }
}

abstract class House {
  protected tenants: Person[] = [];
  protected door: boolean;
  protected key: Key;
  constructor(door: boolean, key: Key) {
    this.door = door;
    this.key = key;
  }

  comeIn(person: Person) {
    this.door
      ? this.tenants.push(person)
      : console.log("The door is closed.");
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door is open");
    } else {
      console.log("Key error");
    }
  }
}
// -----------------------------------

const key = new Key();
key.getSignature();
const house = new MyHouse(key);
const person = new Person(key);
// person.getKey();
// house.openDoor(person.getKey());

house.comeIn(person);
export {};
