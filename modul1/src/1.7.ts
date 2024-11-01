{
  /* 
-- Spread Operator
-- Rest Operator
-- Destructuring 
*/

  // Spread Operator
  const bros1: string[] = ["alif", "jalif", "tonmoy", "sakib", "babu"];
  const bros2: string[] = ["nafija", "leon", "mir", "rakib", "nadir"];

  const allBros = bros1.push(...bros2);

  // Destructuring

  const user = {
    street: "123 Fake Street",
    city: "Faketown",
    state: "CA",
    zipCode: "12345",
    country: "USA",
    apartment: "Apt. 4B",
    name: {
      fn: "Md",
      mn: "Naym",
      ln: "Hossen",
    },
  };

  const {
    apartment,
    name: { fn },
  } = user;
}
