{
  // !
  //   ? Opp - Class

  class Person {
    constructor(
      public name: string,
      public age: number,
      public dreamBike: string,
      public label: string
    ) {}

    makeLife() {
      console.log(`The ${this.name} Her Dream Bike ${this.dreamBike}`);
    }
  }
  const bike = new Person("Naym", 23, "Mt-15", "Junior Dev");

  bike.makeLife();

  // !
}
