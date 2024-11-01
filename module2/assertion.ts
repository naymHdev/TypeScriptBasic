{
  //

  // Type assertion

  let assertion: any;

  assertion = "I love eating piZZa";
  assertion = 700;

  assertion as string; //.length

  assertion as number; //.toFixed()

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is: ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const res1 = kgToGm(10000) as number;
  const res2 = kgToGm("10000") as string;

  //   console.log(`res 1 ${res1} & res 2 ${res2}`);

  //
}
