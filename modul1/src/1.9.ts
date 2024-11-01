{
  //

  type User = {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    apartment: string;
  };

  // Create three different user objects
  const user1: User = {
    street: "456 Real Road",
    city: "Sampleville",
    state: "NY",
    zipCode: "56789",
    country: "USA",
    apartment: "Apt. 1A",
  };

  const user2: User = {
    street: "789 Fiction Blvd",
    city: "Imaginetown",
    state: "TX",
    zipCode: "23456",
    country: "USA",
    apartment: "Suite 202",
  };

  const user3: User = {
    street: "101 Fantasy Ln",
    city: "Dreamland",
    state: "CA",
    zipCode: "34567",
    country: "USA",
    apartment: "Floor 5",
  };

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //
}
