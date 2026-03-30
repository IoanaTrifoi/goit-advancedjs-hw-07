class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Person entered the house.');
    } else {
      console.log('Door is closed. Cannot enter.');
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is now open.');
    } else {
      console.log('Wrong key! The door remains closed.');
    }
  }
}

// Test
const myKey = new Key();
const myHouse = new MyHouse(myKey);
const me = new Person(myKey);

myHouse.openDoor(me.getKey());
myHouse.comeIn(me);

export {};