{
  // !
  // ? Inheritance in OOP

  class Person {
    // name: string;
    // age: number;
    // address: string;
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {
      //   this.name = name;
      //   this.address = address;
      //   this.age = age;
    }
    grtSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Students extends Person {
    constructor(name: string, address: string, age: number) {
      super(name, age, address);
    }
  }
  const student1 = new Students("Ban", "New York", 30);

  class Teachers extends Person {
    designation: string;

    constructor(
      name: string,
      address: string,
      age: number,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    grtSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} `);
    }
  }
  const teacher1 = new Teachers("Iron Man", "Florida", 40, "Professor");

  // * Session Live class -2
  // Base class
  class MusicalInstrument {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    play() {
      console.log(`Playing the ${this.name}... 🎶`);
    }
  }

  // Derived class for a specific instrument
  class Guitar extends MusicalInstrument {
    constructor() {
      super("Guitar");
    }

    tune() {
      console.log("Tuning the guitar...");
    }
  }

  // Another derived class for a different instrument
  class Piano extends MusicalInstrument {
    constructor() {
      super("Piano");
    }

    openLid() {
      console.log("Opening the piano lid...");
    }
  }

  // Using the classes
  const myGuitar = new Guitar();
  myGuitar.play(); // Playing the Guitar... 🎶
  myGuitar.tune(); // Tuning the guitar...

  const myPiano = new Piano();
  myPiano.play(); // Playing the Piano... 🎶
  myPiano.openLid(); // Opening the piano lid...

  // !
}
