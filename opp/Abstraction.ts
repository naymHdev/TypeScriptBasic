{
  // !
  // ?  Abstraction

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //   * Abstract Class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`Just testing`);
    }
  }

  class FerrariCar extends Car2 {
    startEngine(): void {
      console.log(`I am starting The Car Engine`);
    }
    stopEngine(): void {
      console.log(`I am stop The Car Engine`);
    }
    move(): void {
      console.log(`I am moving The Car Engine`);
    }
  }

//   const astonCar = new Car2();
//   astonCar.startEngine();

  // !
}
