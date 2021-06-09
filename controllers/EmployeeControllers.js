const Employee = require('../modules/Employee')

// Employee의 전체 document들을 보여줌
const index = (req, res, next) => {
    Employee.find().then((response) => {
        res.json({
            response,
        })
    }).catch((error) => {
        res.json({
            message: 'index 에러 발생',
        })
    })
}

// Employee의 특정 document를 보여줌
const show = (req, res, next) => {
    let employeeID = req.body.employeeID;
    Employee.findById(employeeID)
        .then((response) => {
            res.json({
                response
            });
        })
        .catch((error) => {
            res.json({
                message: 'show 에러 발생'
            });
        });
}

// employee 추가
const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        description: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
        .then((response) => {
            res.json({
                message: 'Employee 추가 성공'
            })
        })
        .catch((error) => {
            res.json({
                message: 'store 에러 발생'
            })
        });
}

module.exports = {
    index, show, store
};