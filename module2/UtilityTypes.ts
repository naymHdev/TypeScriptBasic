{
  // ! Pic | Omit Type

  type Person = {
    name: string;
    age: number;
    email?: string;
    phone: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  type ContactInfo = Omit<Person, "email" | "phone">;

  type PersonRequired = Required<Person>;
  type PersonPartial = Partial<Person>;

  // !
}
