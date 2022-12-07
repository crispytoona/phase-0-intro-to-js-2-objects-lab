// Write your solution in this file!
const employee = {
    employee0: {
        name: "Peter",
        streetAddress: "30 Dragon Ln",
    employee1: {
        name: "Jane",
        streetAddress: "1 Shopshire St"
    }
    }
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const keylessEmployee = {...employee};
    delete keylessEmployee[key];
    return keylessEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}