class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, private readonly name: string) {}

  describe(this: Department) {
    console.log("Department: " + this.id, this.name);
    console.log(`${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const it = new ITDepartment("it1", ["itMax"]);
console.log("it", it);

const accounting = new Department("1", "Accounting");
accounting.describe();

accounting.addEmployee("Max");

console.log(accounting);

// accounting.employees[2] = "Anna";
