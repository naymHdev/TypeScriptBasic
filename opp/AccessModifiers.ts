{
  // !
  // ?  Access modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _ballance: number;
    constructor(id: number, name: string, _ballance: number) {
      this.id = id;
      this.name = name;
      this._ballance = _ballance;
    }

    addDeposit(amount: number) {
      this._ballance = this._ballance + amount;
    }
    getBallance() {
      return this._ballance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._ballance;
    }
  }

  const poorManAccount = new BankAccount(12, "Poor", 500);
  poorManAccount.addDeposit(500);
  const myBallance = poorManAccount.getBallance();
  console.log(myBallance);

  // !
}
