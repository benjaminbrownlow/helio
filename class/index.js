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
  show() {
    return this.present() + ', his name is ' + this.dog;
  }
}

myanimal = new Dog("Dog", "Winston");
document.getElementById("Animal").innerHTML = myanimal.show();

