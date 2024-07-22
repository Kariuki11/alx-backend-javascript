export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const departmentEmployees of Object.values(report.allEmployees)) {
        yield* departmentEmployees;
      }
    },
  };
}
