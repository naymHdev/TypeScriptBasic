{
  //

  type Person = {
    age: number;
    bike: boolean;
    car: string;
  };

  type Person1 = keyof Person;

  const owner2: Person1 = "age";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Habibur",
    age: 24,
    bike: true,
  };

  const bike = {
    brand: "Royel Enfield",
    price: 410000,
  };

  const res = getPropertyValue(bike, "brand");

  //
}
