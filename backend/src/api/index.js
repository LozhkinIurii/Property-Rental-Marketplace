const express = require('express');
const router = express.Router();

// Dummy offers
let apartments = [
    {
        id: 1,
        type: "Apartment",
        area: "55.0",
        price: 560,
        rooms: 3
    },
    {
        id: 2,
        type: "Detached house",
        area: "78.0",
        price: 700,
        rooms: 5
    },
    {
        id: 3,
        type: "Town house",
        area: "68.0",
        price: 605,
        rooms: 4
    },
]

router.get('/', (req, res) => {
    res.json(apartments);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const offer = apartments.find(offer => offer.id === Number(id));
    if (offer){
        res.status(200).json(offer);
    } else {
        res.status(404).json({message: 'Not found'});
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    apartments.push(data);
    res.json("Added");
});


module.exports = router;
