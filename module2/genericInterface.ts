{
  // ! Practice Generic Interface In TypeScript

  //   * Its a Dynamic Type
  interface Developer<T, P = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releasedYear: number;
      price: number;
    };
    smartWatch?: T;
    personality?: P;
  }

  interface SmartWatch {
    brand: string;
    model: string;
    price: number;
  }

  const richDeveloper: Developer<SmartWatch> = {
    name: "Naym Hossen",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releasedYear: 2012,
      price: 120000,
    },
    smartWatch: {
      brand: "Apple",
      model: "Buy Apple Watch Series 10",
      price: 600,
    },
  };

  interface Personality {
    clothBrand: string;
    clothPrice: number;
    girlfriend: boolean;
  }

  const poorDeveloper: Developer<null, Personality> = {
    name: "Trump",
    computer: {
      brand: "HP",
      model: "Flat-Man-Buddy-1253",
      releasedYear: 2018,
      price: 2000,
    },
    personality: {
      clothBrand: "Nike",
      clothPrice: 10000,
      girlfriend: true,
    },
  };

  //
}
