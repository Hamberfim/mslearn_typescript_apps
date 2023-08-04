"use strict";
// active record pattern - load, save and similar methods to manage data in a database
class DogRecord {
    constructor({ name, age, description, id = 0 }) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }
    static loadDog(id) {
        // code to load dog from database
        return id;
    }
    save() {
        // code to save dog to database
    }
}
// client retrieval of the dog from the server API
// async loadDog(id: number): Dog {
//     return await (await fetch('demoUrl')).json() as Dog;
// }
