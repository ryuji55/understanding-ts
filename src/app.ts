class Department {
  static fiscalYear = 2024;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return { name };
  }

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

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("staticMethodTest");
console.log("employee1", employee1);
console.log("fiscalYear", Department.fiscalYear);

const accountingDepartment = new AccountingDepartment("at1", []);

accountingDepartment.addReport("Something");

console.log("mostRecentReport", accountingDepartment.mostRecentReport);
accountingDepartment.mostRecentReport = "test";
console.log("mostRecentReport", accountingDepartment.mostRecentReport);

accountingDepartment.printReports();

const it = new ITDepartment("it1", ["itMax"]);
console.log("it", it);

const accounting = new Department("1", "Accounting");
accounting.describe();

accounting.addEmployee("Max");

console.log(accounting);

// accounting.employees[2] = "Anna";
