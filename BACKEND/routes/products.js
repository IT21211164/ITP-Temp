const router = require("express").Router();
let product = require('../models/products');

/*
router.route("/").post( async (req, res) => {
    try {

        const product = await Products (req.body).save();
        res.status().send({data: product, message: "product created successfully"})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})*/


router.post("/",(req, res) => {

    const {itemNo, timberType, image} = req.body;


    const newProduct = new product ({
        itemNo,
        timberType,
        image
    })

    newProduct.save().then(() => {
        res.json("New Product added"); //give a response from json format
    }).catch((err) => {
        console.log(err);
    })

})

// Get all songs
router.get("/", async (req, res) => {
    try {
        const products = await product.find();
        res.status(200).send({data: products})
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"})
    }
})


//update data
router.route("/update/:id").put(async (req, res) => {  //async - wait until a promise is coming
    let Id = req.params.id;

    //const name = req.body.name;
    const {vehicleNo, vehicleType, driverName, driverID,driverContactNo,drivingLicenseNo} = req.body; //Destructure

    const updateVehicle = {
        vehicleNo,
        vehicleType,
        driverID,
        driverName,
        driverContactNo,
        drivingLicenseNo,
       
    }

    const update = await vehicle.findByIdAndUpdate(Id, updateVehicle)//await - wait until the update is finished
    .then(() => {
        res.status(200).send({status: "Data updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});

    })
})


//delete data
router.route("/delete/:id").delete(async (req, res) => {  //async - wait until a promise is coming
    let Id = req.params.id;

    await product.findByIdAndDelete(Id)//await - wait until the deletion is finished
    .then(() => {
        res.status(200).send({status: "Data deleted"})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting data", error: err.message});

    })
})


//fetch data by id
router.route("/get/:id").get(async (req, res) => {  //async - wait until a promise is coming
    let Id = req.params.id;

    const fetch = await vehicle.findById(Id)//await - wait until the deletion is finished
    .then((vehicle) => {
        res.status(200).send({status: "Data fetched",vehicle})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with getting data", error: err.message});

    })
})

module.exports = router;