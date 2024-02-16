const fs = require('fs');

const getEmployees = (req, res) => {
    const dataFromJson = fs.readFileSync('./employees.json');
    const jsonData = JSON.parse(dataFromJson);

    // console.log(`Employees in the database: ${employees}`);

    res.send(jsonData);
}

const createEmployee = (req, res) => {   

    var fs = require('fs');
    const dataFromJson = fs.readFileSync('./employees.json');
    const jsonData = JSON.parse(dataFromJson);

    const newEmployee = {
        id: jsonData?.length ? jsonData[jsonData.length - 1].id + 1 : 1,
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phoneNumber:req.body.email,
    }

    jsonData.push({...newEmployee});
    fs.writeFileSync('./employees.json', JSON.stringify(jsonData));
    
    // console.log(`Employees [${employee.firstName} ${employee.lastName} ] added to the database.`);
    res.send(`Employees ${newEmployee.firstName} ${newEmployee.lastName} added to the database.`);
};

const getEmployee = (req, res) => {
    var fs = require('fs');
    const dataFromJson = fs.readFileSync('./employees.json');
    const jsonData = JSON.parse(dataFromJson);
    const employee = jsonData.find(emp => emp.id === parseInt(req.params.id));

    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.params.id} not found` });
    }

    res.send(employee)
};

const deleteEmployee = (req, res) => { 

    var fs = require('fs');
    const dataFromJson = fs.readFileSync('./employees.json');
    const jsonData = JSON.parse(dataFromJson);

    const employee = jsonData.find(emp => emp.id === parseInt(req.body.id));
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    const filteredArray = jsonData.filter(emp => emp.id !== parseInt(req.body.id));
    fs.writeFileSync('./employees.json', JSON.stringify(filteredArray));


    res.send(`Employee with id ${req.body.id} has been deleted`);
    
};

const updateEmployee =  (req,res) => {
    var fs = require('fs');
    const dataFromJson = fs.readFileSync('./employees.json');
    const jsonData = JSON.parse(dataFromJson);
    const employee = jsonData.find(emp => emp.id === parseInt(req.body.id));

    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    
    employee.firstName = req.body.firstName;
    employee.lastName = req.body.lastName;
    employee.email = req.body.email;
    employee.PhoneNumber = req.body.PhoneNumber;

    const filteredArray = jsonData.filter(emp => emp.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, employee];
    unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0);
    fs.writeFileSync('./employees.json', JSON.stringify(unsortedArray));

    res.send(`data has been updated`);
};


module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}