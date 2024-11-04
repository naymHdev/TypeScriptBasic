{
  // !
  // ?  Getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _ballance: number;
    constructor(id: number, name: string, _ballance: number) {
      this.id = id;
      this.name = name;
      this._ballance = _ballance;
    }

    // * Setter
    set deposit(amount: number) {
      this._ballance = this._ballance + amount;
    }

    // * getter
    get ballance() {
      return this._ballance;
    }
  }

  const poorManAccount = new BankAccount(12, "Poor", 500);
  poorManAccount.deposit = 100;

  const myBallance = poorManAccount.ballance;
  console.log(myBallance);

  // !
}
