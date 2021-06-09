const Employee = require('../models/Employee');

// Employee들의 list를 보여줌
const index = (req, res, next) => {
    Employee.find()
        .then((response) => {
            res.json({
                response
            })
        })
        .catch((error) => {
            res.json({
                message: 'index 에러 발생'
            });
        });
};

// MongoDB의 id를 받아서 처리
const show = (req, res, next) => {
    let employeeID = req.body._id;
    Employee.findById(employeeID)
        .then((response) => {
            res.json({
                response
            });
        })
        .catch((error) => {
            res.json({
                message: 'show(READ) 에러 발생'
            });
        });
}

// employee 추가
const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
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
                message: 'store(CREATE) 에러 발생'
            })
        });
}

// employee 갱신(UPDATE)
const update = (req, res, next) => {
    let employeeID = req.body._id;

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    };

    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
        .then(()=>{
            res.json({
                message: 'Employee 갱신(UPDATE) 성공'
            });
        })
        .catch((error) => {
            res.json({
                message: 'Employee 갱신(UPDATE) 에러'
            });
        });
}

// employee 삭제(delete)
const destroy = (req, res, next) => {
    let employeeID = req.body._id;

    Employee.findByIdAndRemove(employeeID)
        .then(()=>{
            res.json({
                message: 'Employee 삭제(DELETE) 성공'
            });
        })
        .catch((error) => {
            res.json({
                message: 'Employee 삭제(DELETE) 에러'
            });
        });
}

module.exports = {
    index, show, store, update, destroy
};