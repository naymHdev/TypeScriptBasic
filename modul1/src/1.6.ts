{
  // Learning ---> Function

  // Normal Function
  function sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  sum(1, 2);

  // Arrow Function
  const addNum = (add1: number, add2: number): number => add1 + add2;

  // Object --> Function --> Method Function

  const isMe = {
    name: "naym",
    balance: 110,
    addBalance(balance: number): string {
      return `New Balance ${this.balance + balance}`;
    },
  };

  // Array type sample

  const array: number[] = [1, 3, 2, 4, 5, 6];

  const newArray: number[] = array.map((ele: number): number => ele * ele);
}
