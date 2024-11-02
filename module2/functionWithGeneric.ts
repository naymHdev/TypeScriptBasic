{
  // ! Starting Comment
  // Todo: Function With Generic Type Explain

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const createArrayWithGenericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resGeneric = createArrayWithGeneric<string>("Bangladesh 2.0");

  interface User {
    id: number;
    name: string;
    isDeveloper: boolean;
  }

  const resGenericObj = createArrayWithGeneric<User>({
    id: 12,
    name: "Rio",
    isDeveloper: true,
  });

  const resTuple = createArrayWithGenericTuple<string, User>("Bangladesh 2.0", {
    id: 20,
    name: "Mio",
    isDeveloper: false,
  });

  const addInfo = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addInfo({
    name: "123",
    age: 12,
    devType: "NWD",
  });

  // ! Closing Comment
}
