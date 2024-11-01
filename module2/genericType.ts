{
  //

  type GenericArray<T> = Array<T>;

  const personsAge: GenericArray<number> = [
    20, 33, 32, 34, 36, 38, 11, 22, 23, 45,
  ];

  const girlFriendsName: GenericArray<string> = [
    "sadia",
    "mim",
    "nafiZa",
    "mou",
    "haniaa",
  ];

  const girls: GenericArray<boolean> = [true, false, true, false, true, true];

  const allFriends: GenericArray<{ name: string; age: number; role?: string }> =
    [
      {
        name: "maliha",
        age: 19,
      },
      {
        name: "sanjida",
        age: 23,
      },
    ];

  // Generic Tuple

  type GenericTuple<T1, T2> = [T1, T2];

  const she: GenericTuple<string, number> = ["Taskiya", 22];

  const gofDetails: GenericTuple<
    number,
    { name: string; mail: string; age: number }
  > = [1377836, { name: "Aliaa Vhat", mail: "alia@vhat.com", age: 34 }];

  //
}
