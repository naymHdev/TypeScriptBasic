{
  //

  type Person1 = {
    name: string;
    age: number;
  };

  interface Person3 {
    name: string;
    age: number;
  }

  type PersonWithRoll1 = Person1 & { role: string };

  interface PersonWithRoll3 extends Person3 {
    role: string;
  }

  type Person2 = {
    name: string;
    age: number;
  };

  const person1: PersonWithRoll1 = {
    name: "Naym",
    age: 23,
    role: "CEO",
  };

  const person2: Person2 = {
    name: "Maliha",
    age: 22,
  };

  const person3: PersonWithRoll3 = {
    name: "Methila",
    age: 21,
    role: "Friends",
  };

  // Js ---> Object >> Array ---> Object Function ---> object

  type Roll = number[];
  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber: Roll2 = [1, 2, 3, 4, 5, 6];

  type Add = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const addNumber: Add2 = (num1, num2) => num1 + num2;

  const sum = addNumber(3, 4);

  //
}
