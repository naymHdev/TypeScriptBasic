// Reference type >>> --- Object

const user: {
  learn: "Programming Hero"; // Type --> Literal type
  readonly name: string; // Fix the value not modified able for use the type!
  age: number;
  presentAdders: string;
  study: string;
  religion: string;
  isFit: true;
  isMarried?: string; // Optional ---> Type
} = {
  name: "Naym",
  age: 23,
  presentAdders: "Dhaka",
  study: "bangladesh",
  religion: "islam",
  isFit: true,
  learn: "Programming Hero",
};

// user.name = "Naym Hossen";
