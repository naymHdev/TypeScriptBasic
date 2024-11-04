{
  // !
  // ?  Type guard using typeof & in

  type AlphaNewMetric = string | number;

  const add = (
    param1: AlphaNewMetric,
    param2: AlphaNewMetric
  ): AlphaNewMetric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      const sumString = param1.toString() + param2.toString();
      return sumString;
    }
  };

  // !
}
