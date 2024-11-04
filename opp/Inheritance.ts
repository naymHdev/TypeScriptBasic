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

  // !
}
