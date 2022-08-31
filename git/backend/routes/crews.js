const express = require('express');
const Crews = require('../models/crew');
const Contract = require('../models/contract');
// const Crews = require('../models/crews');

const router = express.Router();

//Get contract details

router.get('/getconractall',(req,res)=>{

    Contract.find().exec((err, contact)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingcontract: contact
        });
    });
});

//get only contracts 
router.get('/getconid',(req,res)=>{
    Crews.find().sort({field : 1}).distinct('contractID').exec((err, list)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            list: list
            
        });
    });

});
//Save crew

router.post('/save',(req,res)=>{

    let newCrew = new Crews(req.body);

    newCrew.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Crew Save Successfully"
        });
    });
});


//Get crew's details

router.get('/getall',(req,res)=>{

    Crews.find().exec((err, crews)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingcrews: crews
        });
    });
});


//Get a Specific Machinery

router.get('/get/:id', (req,res) => {

    let contractID = req.params.id;

    Crews.findById(contractID,(err,crew) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            crew
        });
    });
});


//Update Crew's details

router.put('/update/:id', (req,res)=>{

    Crews.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, crews) => {
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


//Delete Crew in the list

router.delete('/delete/:id', (req,res)=>{

    Crews.findByIdAndRemove(req.params.id).exec((err, deletedCrew)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedCrew
        });
    });
});

//Search Details 
router.get("/" ,async (req,res ) => {
    const findPost = await Post.find({employeeName: req.query.post});

    if(findPost&&findPost.length) {
        res.status(200).json(findPost);
    } else {
        res.status(200).json({
            message: "mess Successful.",
        });// if not found,simply send empty array
    };

})


module.exports = router;