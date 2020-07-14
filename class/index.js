class Animal {
  constructor(species) {
    this.speciesname = species;
  }
  present() {
    return 'I have a ' + this.speciesname;
  }
}

class Dog extends Animal {
  constructor(species, name) {
    super(species);
    this.dog = name;
  }
}

myanimal = new Dog("Dog", "Winston");