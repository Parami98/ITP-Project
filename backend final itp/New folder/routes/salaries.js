const express = require('express');
const Salaries = require('../models/salaries');

const router = express.Router();


//Save crew

router.post('/save',(req,res)=>{

    const employeeID = req.body.employeeID;
    const employeeName = req.body.employeeName;
    const position = req.body.position;
    const attendance = req.body.attendance;
    const calculateBy = req.body.calculateBy;
    const salary = Number(req.body.salary);

    const newSalaries = new Salaries({
        employeeID,
        employeeName,
        position,
        attendance,
        calculateBy,
        salary
    });

    newSalaries.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"salary details Save Successfully"
        });
    });
});


//Get salary details

router.get('/getall',(req,res)=>{

    Salaries.find().exec((err, Salaries)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingSalaries: Salaries
        });
    });
});


//Get a Specific salary details

router.get('/get/:id', (req,res) => {

    let salaryId = req.params.id;

    Salaries.findById(salaryId,(err,salary) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            salary
        });
    });
});


//Update salary details

router.put('/update/:id', (req,res)=>{

    Salaries.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, Salaries) => {
            if(err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Successfully."
            });
        }
    );
});


//Delete salary details from the list

router.delete('/delete/:id', (req,res)=>{

    Salaries.findByIdAndRemove(req.params.id).exec((err, deletedSalary)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedSalary
        });
    });
});


module.exports = router;