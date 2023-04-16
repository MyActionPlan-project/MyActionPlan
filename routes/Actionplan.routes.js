const router = require ("express").Router()
const mongoose = require ("mongoose")
const Actionplan = require("../models/Actionplan.model")
const Step = require("../models/Step.model")
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

// post/api/actionplans
router.post("/actionplans", isAuthenticated, (req,res,next)=>{
    const {
        title,
        category,
        description,
        deadline, 
        location,
        image,
     } = req.body;

     
    Actionplan.create({
        title,
        category, 
        description, 
        deadline: new Date(deadline),
        location,
        image,
        steps:[],
        userId: req.payload._id
    })
    .then(response => res.status(201).json(response))
    .catch(err => {
        console.log("error creating a new actionplan", err);
        res.status(500).json({
            message: "error creating a new actionplan",
            error: err
        });
    })
})

// get/api/actionplans
router.get("/actionplans", isAuthenticated, (req,res,next)=>{
    Actionplan.find()
    .populate("steps")
    .then(actionplansfromDB=>{
        res.json(actionplansfromDB)
    })
    .catch(err => {
        console.log("error displaying list of actionplans", err);
        res.status(500).json({
            message: "error displaying list of actionplans",
            error: err
        });
    })
})

// get/api/actionplans/:actionplanId
router.get("/actionplans/:actionplanId", isAuthenticated, (req,res,next)=>{
    const {actionplanId} = req.params

    if(!mongoose.Types.ObjectId.isValid(actionplanId)){
        res.status(400).json({message: "specified id is not valid"})
        return
    }
    Actionplan.findById(actionplanId)
    .populate("steps")
    .then(actionplan =>res.json(actionplan))
    .catch(err => {
        console.log("error displaying details of actionplan", err);
        res.status(500).json({
            message: "error displaying details of actionplan",
            error: err
        });
    })
})

//put/api/actionplans/:actionplanId
router.put("/actionplans/:actionplanId", isAuthenticated, (req,res,next)=>{
    const {actionplanId} = req.params;

    if(!mongoose.Types.ObjectId.isValid(actionplanId)){
        res.status(400).json({message: "specified id is not valid"})
        return
    }

    Actionplan.findByIdAndUpdate(actionplanId, req.body,{new: true})
    .then((updatedActionplan) => res.json(updatedActionplan))
    .catch(err => {
        console.log("error updating actionplan", err);
        res.status(500).json({
            message: "error updating actionplan",
            error: err
        });
    })
})

//delete/api/actionplans/:actionplanId
router.delete("/actionplans/:actionplanId", isAuthenticated, (req,res,next)=>{
    const {actionplanId} = req.params;

    if(!mongoose.Types.ObjectId.isValid(actionplanId)){
        res.status(400).json({message: "specified id is not valid"})
        return
    }

    Actionplan.findByIdAndDelete(actionplanId)
    .then(()=>res.json({message: `Actionplan with ${actionplanId} is deleted`}))
    .catch(err => {
        console.log("error deleting actionplan", err);
        res.status(500).json({
            message: "error deleting actionplan",
            error: err
        });
    })
})

module.exports = router 