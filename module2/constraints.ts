{
  // ! Starting Comment
  // ? Constraints

  type StudentType = {
    id: number;
    name: string;
    email: string;
  };

  const addInfo = <T extends StudentType>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addInfo({
    id: 23,
    name: "Naym",
    email: "naym@gmail.com",
    age: 23,
  });

  // ! Closing Comment
}
