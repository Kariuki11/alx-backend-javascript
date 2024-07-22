export default function createEmployeesObject(departmentName, employees) {
  const obj = {};
  obj[departmentName] = employees;
  return obj;
}
