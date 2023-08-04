//client and server implementation of how data should be structured
interface Dog {
  id?: number;
  name: string;
  age: number;
  description: string;
}

// active record pattern - load, save and similar methods to manage data in a database
class DogRecord implements Dog {
  id: number;
  name: string;
  age: number;
  description: string;

  constructor({ name, age, description, id = 0 }: Dog) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.description = description;
  }

  static loadDog(id: number): DogRecord {
    // code to load dog from database
    return dog;
  }

  save() {
    // code to save dog to database
  }
}

// client retrieval of the dog from the server API
// async loadDog(id: number): Dog {
//     return await (await fetch('demoUrl')).json() as Dog;
// }
