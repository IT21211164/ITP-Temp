const router = require("express").Router();
let transportation = require("../models/transport");

//add data
router.route("/add").post((req, res) => {
    const date = Date(req.body.date);
    const vehicleNo = req.body.vehicleNo;
    const purchaseOrderNo = req.body.purchaseOrderNo;
    const noOfKms= Number(req.body.noOfKms);
    const fuel = Number(req.body.fuelConsumption);
    const timberVolume = Number(req.body.timberVolume);

    const newTransportation = new transportation({
        date,
        vehicleNo,
        purchaseOrderNo,
        noOfKms,
        fuel,
        timberVolume,
      
    })

    newTransportation.save().then(() => {
        res.json("New transportation added"); //give a response from json format
    }).catch((err) => {
        console.log(err);
    })

})

//fetch data
router.route("/").get((req, res)=>{

    transportation.find().then((transportation) => {
        res.json(transportation);
    }).catch((err) => {
        console.log(err);
    })
})


//update data
router.route("/update/:id").put(async (req, res) => {  //async - wait until a promise is coming
    let Id = req.params.id;

    //const name = req.body.name;
    const { date, vehicleNo, purchaseNo, NoOfKm, fuel, timberVolume,} = req.body; //Destructure

    const updateTransportation = {
        date,
        vehicleNo,
        purchaseNo,
        NoOfKm,
        fuel,
        timberVolume,
       
    }

    const update = await transportation.findByIdAndUpdate(Id, updateTransportation)//await - wait until the update is finished
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

    await transportation.findByIdAndDelete(Id)//await - wait until the deletion is finished
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

    const fetch = await transportation.findById(Id)//await - wait until the deletion is finished
    .then((transportation) => {
        res.status(200).send({status: "Data fetched",transportation})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with getting data", error: err.message});

    })
})

module.exports = router;